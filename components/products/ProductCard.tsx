"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coffee, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart.`);
  };

  return (
    <Card className="group hover:shadow-md transition-all duration-300">
      <Link href={`/products/${product.slug.current}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          {product.image?.asset?._ref ? (
            <Image
              src={urlFor(product.image).width(500).height(500).url()}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Coffee className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>
      </Link>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Link href={`/products/${product.slug.current}`}>
            <CardTitle className="text-base font-semibold line-clamp-2 text-primary hover:text-coffee-green transition-colors">
              {product.name}
            </CardTitle>
          </Link>
          {product.featured && (
            <Star className="h-5 w-5 text-coffee-green" fill="currentColor" />
          )}
        </div>
        {product.category && (
          <Badge variant="secondary" className="w-fit">
            {typeof product.category === "string"
              ? product.category
              : product.category.name}
          </Badge>
        )}
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xl font-bold text-primary">
              ${product.price}
            </span>
            <p className="text-xs text-muted-foreground">per kg</p>
          </div>
          <div className="flex gap-2">
            <Link href={`/products/${product.slug.current}`}>
              <Button size="sm" variant="outline">
                View
              </Button>
            </Link>
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={!product.stock}
              className="bg-coffee-green text-white hover:bg-coffee-green/90"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>

        {/* {product.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )} */}
      </CardContent>
    </Card>
  );
};
