import { formatPrice } from "@/lib/functions";

interface ProductCardProps {
  id: string;
  img: string;
  title: string;
  priceAtacado: number;
  priceVarejo: number;
}

export function ProductCard({
  id,
  img,
  title,
  priceVarejo,
}: ProductCardProps) {
  return (
    <div
      key={id}
      className="flex-shrink-0 bg-white w-56 rounded-md overflow-hidden"
    >
      <div className="p-5">
        <img
          className="w-full max-h-28  object-contain mb-4"
          src={img}
          alt={title}
        />
      </div>
      <div className="px-6 py-2 pb-5">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-xs mt-2">Preço/unidade</span>
          <p className="font-bold text-md text-red-600">
            {formatPrice(priceVarejo.toString())}
          </p>
        </div>
      </div>
    </div>
  );
}
