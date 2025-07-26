"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useProduct } from "@/hooks/useSanity";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import QuantitySelector from "@/components/product/QuantitySelector";
import TagsList from "@/components/product/TagsList";
import ProductSpecifications from "@/components/product/ProductSpecifications";

export default function ProductDetails() {
  const params = useParams(); // ✅ useParams hook
  const slug = params?.slug as string;
  const { product, loading, error } = useProduct(slug as string);
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < quantity; i++) addItem(product);
    toast(`${quantity} × ${product.name} added to your cart.`);
  };

  if (loading) return <div className="pt-20 pb-12 text-center">Loading...</div>;

  if (error || !product) {
    return (
      <div className="min-h-screen">
        <div className="pt-20 pb-12 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            {error || "The product you're looking for doesn't exist."}
          </p>
          <Link href="/products">
            <button className="text-sm underline text-primary">
              <ArrowLeft className="h-4 w-4 mr-1 inline" /> Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const images: { url: string; alt: string }[] = (
    product.images?.length ? product.images : [product.image]
  )
    .map((img: any) => {
      if (!img?.asset?._ref) return null;

      return {
        url: urlFor(img).width(800).height(800).url(),
        alt: img.alt || product.name,
      };
    })
    .filter(Boolean) as { url: string; alt: string }[]; // this still has type ({} | null)[]

  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-12 container mx-auto px-4">
        <Link
          href="/products"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery images={images} productName={product.name} />
          <div className="space-y-6">
            <ProductInfo product={product} />
            <QuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
              disabled={!product.inStock}
              onAddToCart={handleAddToCart}
              price={product.price ?? 0}
            />
            <TagsList tags={product.tags || []} />
            <ProductSpecifications specifications={product.specifications} />
          </div>
        </div>
      </div>
    </div>
  );
}
