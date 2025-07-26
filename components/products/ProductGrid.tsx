import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { ProductSkeleton } from "./ProductSkeleton";

interface Props {
  products: Product[];
  loading: boolean;
}

export const ProductGrid = ({ products, loading }: Props) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <ProductSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-center py-12">
        <p className="text-lg font-medium text-muted-foreground">
          No products found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};
