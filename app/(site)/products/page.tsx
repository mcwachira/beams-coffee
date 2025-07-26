"use client";
import { useState } from "react";
import { useProducts, useCategories } from "@/hooks/useSanity";
import { ProductFilterButtons } from "@/components/products/ProductFilterButtons";
import { ProductGrid } from "@/components/products/ProductGrid";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered = products.filter(
    (p) =>
      selectedCategory === "all" ||
      (typeof p.category === "object" && p.category.name === selectedCategory),
  );

  if (error) {
    return (
      <div className="pt-20 text-center text-muted-foreground">
        Error loading products: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 container px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary font-serif">
        Our Coffee Products
      </h1>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Discover our selection of Kenyan coffee beans, roasted to perfection.
      </p>

      <ProductFilterButtons
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
        categories={categories}
      />

      <ProductGrid products={filtered} loading={loading} />
    </div>
  );
}
