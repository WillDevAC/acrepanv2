import { Gift, Home, Package2, ShoppingCart } from "lucide-react";

export const tabs = [
  {
    id: "home",
    label: "Home",
    content: (
      <div className="flex flex-col items-center gap-2 font-medium">
        <Home size={20} className="text-slate-600" />
        <span className="text-sm text-slate-600">Home</span>
      </div>
    ),
  },
  {
    id: "pedidos",
    label: "pedidos",
    content: (
      <div className="flex flex-col items-center gap-2 font-medium">
        <Package2 size={20} className="text-slate-600" />
        <span className="text-sm text-slate-600">Pedidos</span>
      </div>
    ),
  },
  {
    id: "clube",
    label: "clube",
    content: (
      <div className="flex flex-col items-center gap-2 font-medium">
        <ShoppingCart size={20} className="text-slate-600" />
        <span className="text-sm text-slate-600">Carrinho</span>
      </div>
    ),
  },
];
