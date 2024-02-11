import { Flame } from "lucide-react";
import { Link } from "react-router-dom";

import { formatPrice } from "@/lib/functions";

interface ProductCardProps {
  id: string;
  img: string;
  title: string;
  priceAtacado: number;
  priceVarejo: number;
  description: string;
}

export function ProductCard({
  id = "0",
  img = "#",
  title = "",
  description = "",
  priceVarejo = 0,
}: ProductCardProps) {
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col bg-white min-w-[350px] max-w-5 rounded h-auto relative border"
    >
      <div className="flex">
        <section id="photo-details" className="flex flex-col p-3">
          <img src={img} alt="Foto do produto" className="max-w-14" />
        </section>
        <section id="details" className="flex flex-col gap-2 flex-1 pt-3">
          <h1 className="font-bold text-md uppercase w-2/3 ">{title}</h1>
          <span className="text-xs text-gray-500 w-4/5">{description}</span>
          <div className="flex flex-col mt-3 pb-3">
            <span className="text-xs text-gray-600 font-medium">
              Preço/unidade
            </span>
            <p className="font-bold text-red-600">
              {formatPrice(priceVarejo.toString())}
            </p>
          </div>
        </section>
        <div className="flex items-center absolute m-2 gap-1 rounded text-white text-sm font-medium p-1 top-0 right-0 bg-blue-600">
          <Flame size={15} />
          <p>DESTAQUE</p>
        </div>
      </div>
    </Link>
  );
}
