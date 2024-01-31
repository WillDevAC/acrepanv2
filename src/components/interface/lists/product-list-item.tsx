import { formatPrice } from "@/lib/functions";

interface ProductListItemProps {
  id: string;
  image: string;
  title: string;
  priceVarejo: number;
  priceAtacado: number;
}

export function ProductListItem({
  image,
  title,
  priceVarejo,
}: ProductListItemProps) {
  return (
    <div className="flex flex-row items-center gap-3 bg-white p-5 rounded-md">
      <section className="flex items-center justify-cente w-20 h-16">
        <img
          src={image}
          alt="Product Image"
          className="object-contain w-full h-full"
        />
      </section>
      <section className="flex flex-col justify-between gap-2">
        <h1 className="font-bold text-md ">{title}</h1>
        <div className="flex flex-col">
          <span className="text-gray-600 text-xs mt-2">Preço/unidade</span>
          <p className="font-bold text-md text-red-600">
            {formatPrice(priceVarejo.toString())}
          </p>
        </div>
      </section>
    </div>
  );
}
