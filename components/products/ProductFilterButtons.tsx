import { Button } from "@/components/ui/button";
import { Filter, Leaf } from "lucide-react";

interface Props {
  selectedCategory: string;
  onSelect: (category: string) => void;
  categories: { _id: string; name: string }[];
}

export const ProductFilterButtons = ({
  selectedCategory,
  onSelect,
  categories,
}: Props) => (
  <div className="flex flex-wrap justify-center gap-3 mb-12">
    <Button
      variant={selectedCategory === "all" ? "default" : "outline"}
      onClick={() => onSelect("all")}
      className={selectedCategory === "all" ? "bg-coffee-green text-white" : ""}
    >
      <Leaf className="h-4 w-4 mr-2" />
      All
    </Button>
    {categories.map((cat) => (
      <Button
        key={cat._id}
        variant={selectedCategory === cat.name ? "default" : "outline"}
        onClick={() => onSelect(cat.name)}
        className={
          selectedCategory === cat.name ? "bg-coffee-green text-white" : ""
        }
      >
        <Filter className="h-4 w-4 mr-2" />
        {cat.name}
      </Button>
    ))}
  </div>
);
