"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, X, ArrowRight, Coffee } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { urlFor } from "@/sanity/lib/sanity";

const Cart = () => {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } =
    useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      toast("Item has been removed from your cart.");
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast(`Item removed,${name} has been removed from your cart.`);
  };

  const handleClearCart = () => {
    clearCart();
    toast("Cart cleared,all items have been removed from your cart.");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="pt-20 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <Coffee className="h-16 w-16 text-coffee-green mx-auto mb-6" />
              <h1 className="font-serif text-3xl font-bold text-primary mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any coffee to your cart yet.
                Discover our premium selection and find your perfect brew.
              </p>
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-coffee-green hover:bg-coffee-green/90"
                >
                  Shop Coffee Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                  Shopping Cart
                </h1>
                <p className="text-muted-foreground">
                  {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleClearCart}
                className="text-red-600 border-red-200 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card key={item._id}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-24 h-24 bg-coffee-cream rounded-lg overflow-hidden flex-shrink-0">
                          {item.image?.asset ? (
                            <Image
                              src={urlFor(item.image)
                                .width(200)
                                .height(200)
                                .url()}
                              alt={item.image.alt || item.name}
                              width={200}
                              height={200}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                              <Coffee className="h-8 w-8 text-coffee-green" />
                            </div>
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0 mr-4">
                              <Link
                                href={`/products/${item.slug?.current || item.slug}`}
                              >
                                <h3 className="font-semibold text-primary hover:text-coffee-green transition-colors line-clamp-1">
                                  {item.name}
                                </h3>
                              </Link>
                              <Badge
                                variant="secondary"
                                className="mt-1 text-xs"
                              >
                                {typeof item.category === "string"
                                  ? item.category
                                  : item.category?.name}
                              </Badge>
                              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                {item.description}
                              </p>
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleRemoveItem(item._id, item.name)
                              }
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Quantity and Price */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  handleQuantityChange(
                                    item._id,
                                    item.quantity - 1,
                                  )
                                }
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-12 text-center font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  handleQuantityChange(
                                    item._id,
                                    item.quantity + 1,
                                  )
                                }
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                              <span className="text-sm text-muted-foreground ml-2">
                                kg
                              </span>
                            </div>

                            <div className="text-right">
                              <div className="font-semibold text-primary">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                ${item.price}/kg
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal ({itemCount} items)</span>
                      <span>${total.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-coffee-green">
                        ${total.toFixed(2)}
                      </span>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Link href="/checkout">
                        <Button
                          size="lg"
                          className="w-full bg-coffee-green hover:bg-coffee-green/90"
                        >
                          Proceed to Checkout
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>

                      <Link href="/products">
                        <Button variant="outline" size="lg" className="w-full">
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>

                    <div className="text-xs text-muted-foreground text-center pt-4 border-t">
                      <p>Free shipping on orders over $100</p>
                      <p>Secure checkout with SSL encryption</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
