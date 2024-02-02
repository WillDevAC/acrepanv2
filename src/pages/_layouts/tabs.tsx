import { Gift, Home, Package2, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const tabs = [
  {
    id: "home",
    label: "Home",
    content: (
      <Link className="flex flex-col items-center gap-2 font-medium" to="/home">
        <Home size={20} className="text-slate-600" />
        <span className="text-sm text-slate-600">Home</span>
      </Link>
    ),
  },
  {
    id: "pedidos",
    label: "pedidos",
    content: (
      <Link
        className="flex flex-col items-center gap-2 font-medium"
        to="/my-orders"
      >
        <Package2 size={20} className="text-slate-600" />
        <span className="text-sm text-slate-600">Pedidos</span>
      </Link>
    ),
  },
  {
    id: "clube",
    label: "clube",
    content: (
      <Link
        className="flex flex-col items-center gap-2 font-medium"
        to="/my-club"
      >
        <Gift size={20} className="text-slate-600" />
        <span className="text-sm text-slate-600">Clube</span>
      </Link>
    ),
  },
  {
    id: "carrinho",
    label: "carrinho",
    content: (
      <Link
        className="flex flex-col items-center gap-2 font-medium"
        to="/my-cart"
      >
        <ShoppingCart size={20} className="text-slate-600" />
        <span className="text-sm text-slate-600">Carrinho</span>
      </Link>
    ),
  },
];
