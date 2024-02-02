import { formatPrice } from "@/lib/functions";

interface ProductCardClubProps {
  discont: number;
  price: number;
  title: string;
}

export function ProductCardClub({
  title,
  discont,
  price,
}: ProductCardClubProps) {
  return (
    <div
      className={`bg-gray-200 p-4 rounded-md cursor-pointer w-full`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-md font-bold">{title}</h2>
        <span>{formatPrice(price.toString())}</span>
      </div>
      <div className="flex flex-col pt-3">
        <span className="text-xs font-bold">Assinatura mensal</span>
        <span className="text-xs">{discont}% de desconto em toda compra.</span>
      </div>
    </div>
  );
}