import { Badge } from "@/components/ui/badge";
import { Star, Package } from "lucide-react";

interface Props {
  product: any;
}

export default function ProductInfo({ product }: Props) {
  console.log(product);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Badge variant="secondary">{product.category?.name}</Badge>
        {product.featured && (
          <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
        )}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-primary font-serif">
        {product.name}
      </h1>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-coffee-green">
          ${product.price}
        </span>
        <span className="text-muted-foreground">per kg</span>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {product.description}
      </p>
      <div className="flex items-center gap-2">
        <Package className="h-5 w-5" />
        <span
          className={`font-medium ${
            product.inStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
}
