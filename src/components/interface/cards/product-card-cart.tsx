import { Minus, Plus } from "lucide-react";

export function ProductCardCartItem() {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <img src="/pao.png" alt="Product" className="mr-4 max-w-8" />
        <div>
          <p className="text-sm font-semibold">Nome do Produto</p>
          <p className="text-xs text-gray-500">Quantidade: 2</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-3">
          <Minus
            size={25}
            className="p-1 bg-slate-200 rounded-lg cursor-pointer"
          />
          <h1 className="font-bold text-lg">0</h1>
          <Plus
            size={25}
            className="p-1 bg-slate-200 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
