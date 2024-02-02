import { formatPrice } from "@/lib/functions";
import { Minus, Plus } from "lucide-react";

interface ProductCardCartItem {
  title: string;
  price: string;
  typeOrder: string;
  quantity: string;
  handleDecrement: Function,
  handleIncrement: Function,
  index: any,
}

export function ProductCardCartItem({
  title,
  price,
  typeOrder,
  quantity,
  handleDecrement,
  handleIncrement,
  index
}: ProductCardCartItem) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <img src="/pao.png" alt="Product" className="mr-4 max-w-8" />
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs text-gray-500">
            {`${formatPrice(
              price.toString()
            )} - quantidade: ${quantity} - ${typeOrder}`}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-3">
          <Minus
            size={25}
            className="p-1 bg-slate-200 rounded-lg cursor-pointer"
            id="remove" onClick={() => handleDecrement(index)}
          />
          <h1 className="font-bold text-lg">
            { quantity }
          </h1>
          <Plus
            size={25}
            className="p-1 bg-slate-200 rounded-lg cursor-pointer"
            onClick={() => handleIncrement(index)}
          />
        </div>
      </div>
    </div>
  );
}
