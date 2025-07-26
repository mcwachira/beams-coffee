import { Button } from "@/components/ui/button";

interface Props {
  quantity: number;
  setQuantity: (val: number) => void;
  disabled?: boolean;
  onAddToCart: () => void;
  price: number;
}

export default function QuantitySelector({
  quantity,
  setQuantity,
  disabled,
  onAddToCart,
  price,
}: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label htmlFor="quantity" className="text-sm font-medium">
          Quantity (kg):
        </label>
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 hover:bg-muted"
          >
            -
          </button>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="w-16 px-3 py-2 text-center border-0 bg-transparent"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 hover:bg-muted"
          >
            +
          </button>
        </div>
      </div>
      <Button
        size="lg"
        className="w-full bg-coffee-green hover:bg-coffee-green/90"
        disabled={disabled}
        onClick={onAddToCart}
      >
        Add to Cart - ${(price * quantity).toFixed(2)}
      </Button>
    </div>
  );
}
