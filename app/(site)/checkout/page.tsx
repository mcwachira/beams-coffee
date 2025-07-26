"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, Truck, Shield, Coffee } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Checkout = () => {
  const { items, total, itemCount, clearCart } = useCart();

  const router = useRouter();

  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "Kenya",
    postalCode: "",
    phone: "",
    shippingMethod: "standard",
    paymentMethod: "mpesa",
    mpesaPhone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    saveInfo: false,
    sameAsBilling: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const calculateShipping = () => {
    if (total >= 100) return 0;
    return formData.shippingMethod === "express"
      ? 15
      : formData.shippingMethod === "overnight"
        ? 25
        : 10;
  };

  const shipping = calculateShipping();
  const finalTotal = total + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    await new Promise((r) => setTimeout(r, 2000));

    toast(`Your order for ${itemCount} items has been confirmed.`);

    clearCart();
    router.push("/");
    setIsProcessing(false);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="pt-20 pb-12">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <Coffee className="h-16 w-16 text-coffee-green mx-auto mb-6" />
              <h1 className="font-serif text-3xl font-bold mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground mb-8">
                You need items in your cart to proceed to checkout.
              </p>
              <Link href="/products">
                <Button size="lg" className="bg-coffee-green">
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
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/cart">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Cart
                </Button>
              </Link>
              <h1 className="font-serif text-3xl md:text-4xl font-bold">
                Checkout
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Form Columns */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Contact */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        placeholder="you@example.com"
                        onChange={handleInputChange}
                        required
                      />
                    </CardContent>
                  </Card>

                  {/* Shipping Address */}
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <Truck className="h-5 w-5 inline-block mr-2" />
                        Shipping Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="apartment">Apartment, suite…</Label>
                        <Input
                          id="apartment"
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="postalCode">Postal Code *</Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Shipping */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Shipping Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {["standard", "express", "overnight"].map((method) => (
                        <div
                          key={method}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="radio"
                            id={method}
                            name="shippingMethod"
                            value={method}
                            checked={formData.shippingMethod === method}
                            onChange={handleInputChange}
                            className="text-coffee-green"
                          />
                          <label
                            htmlFor={method}
                            className="flex justify-between w-full"
                          >
                            <span>
                              {method.charAt(0).toUpperCase() + method.slice(1)}{" "}
                              Shipping
                            </span>
                            <span>
                              $
                              {method === "standard"
                                ? total >= 100
                                  ? 0
                                  : 10
                                : method === "express"
                                  ? 15
                                  : 25}
                            </span>
                          </label>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Payment */}
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <CreditCard className="h-5 w-5 inline-block mr-2" />
                        Payment Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Label>Payment Method *</Label>
                      {["mpesa", "card"].map((pm) => (
                        <div key={pm} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id={pm}
                            name="paymentMethod"
                            value={pm}
                            checked={formData.paymentMethod === pm}
                            onChange={handleInputChange}
                            className="text-coffee-green"
                          />
                          <label
                            htmlFor={pm}
                            className="flex items-center gap-2"
                          >
                            <span className="font-medium">
                              {pm === "mpesa" ? "M‑PESA" : "Credit/Debit Card"}
                            </span>
                            {pm === "mpesa" && (
                              <span className="text-sm text-muted-foreground">
                                (Mobile Money)
                              </span>
                            )}
                          </label>
                        </div>
                      ))}

                      {formData.paymentMethod === "mpesa" && (
                        <div className="p-4 bg-green-50 border rounded-lg border-green-200">
                          <Label htmlFor="mpesaPhone">M‑PESA Phone *</Label>
                          <Input
                            id="mpesaPhone"
                            name="mpesaPhone"
                            type="tel"
                            value={formData.mpesaPhone}
                            onChange={handleInputChange}
                            required
                            placeholder="254701234567"
                          />
                        </div>
                      )}

                      {formData.paymentMethod === "card" && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="cardNumber">Card Number *</Label>
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              required
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiryDate">Expiry Date *</Label>
                              <Input
                                id="expiryDate"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleInputChange}
                                required
                                placeholder="MM/YY"
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV *</Label>
                              <Input
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                required
                                placeholder="123"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="nameOnCard">Name on Card *</Label>
                            <Input
                              id="nameOnCard"
                              name="nameOnCard"
                              value={formData.nameOnCard}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {items.map((item) => (
                        <div key={item._id} className="flex gap-3">
                          <div className="w-12 h-12 bg-coffee-cream rounded overflow-hidden flex-shrink-0">
                            {item.image?.asset?.url ? (
                              <img
                                src={item.image.asset.url}
                                alt={item.image.alt || item.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
                                <Coffee className="h-4 w-4 text-coffee-green" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium line-clamp-1">
                              {item.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Qty: {item.quantity} × ${item.price}
                            </p>
                          </div>
                          <div className="text-sm font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}

                      <Separator />
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span>${shipping.toFixed(2)}</span>
                        </div>
                        {total >= 100 && (
                          <div className="flex justify-between text-green-600">
                            <span>Free shipping discount</span>
                            <span>−$10.00</span>
                          </div>
                        )}
                      </div>

                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span className="text-coffee-green">
                          ${finalTotal.toFixed(2)}
                        </span>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-coffee-green"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            Complete Order
                          </div>
                        )}
                      </Button>

                      <div className="text-xs text-muted-foreground text-center space-y-1">
                        <p className="flex items-center justify-center gap-1">
                          <Shield className="h-3 w-3 inline-block" />
                          Secure SSL encrypted checkout
                        </p>
                        <p>30‑day return policy</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
