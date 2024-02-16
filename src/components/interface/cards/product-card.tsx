import { Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPrice } from "@/lib/functions";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

interface ProductCardProps {
  id?: string;
  img?: string;
  title?: string;
  priceVarejo?: number;
  priceAtacado?: number;
  description?: string;
  type: "skeleton" | "default" | "list";
}

function DefaultVariantProductCard({
  id,
  title,
  description,
  img,
  priceVarejo,
  loading,
  setLoading,
}: ProductCardProps & {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col bg-white min-w-[350px] max-w-5 rounded h-auto relative border pt-2"
    >
      <div className="flex">
        <section className="flex items-center justify-center flex-col p-3">
          {loading && <Skeleton className="h-12 w-12 rounded-full" />}
          <img
            src={img}
            alt="Foto do produto"
            className={`max-w-[65px] ${loading ? "hidden" : ""}`}
            onLoad={() => setLoading(false)}
          />
        </section>
        <section className="flex flex-col flex-1 pt-1">
          <h1 className="font-bold text-lg w-2/3">{title}</h1>
          <span className="text-gray-400 text-md w-[90%] pt-1">
            {description}
          </span>
          <p className="pt-2 pb-3 text-orange-600 font-medium text-md">
            {priceVarejo && formatPrice(priceVarejo.toString())}
          </p>
        </section>
        <div className="flex items-center absolute m-2 gap-1 rounded text-white text-sm font-medium p-1 top-0 right-0 bg-slate-600">
          <Flame size={15} />
          <p>DESTAQUE</p>
        </div>
      </div>
    </Link>
  );
}

function ListVariantProductCard({
  id,
  title,
  description,
  img,
  priceVarejo,
  loading,
  setLoading,
}: ProductCardProps & {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col bg-white w-full h-auto rounded relative border pt-2"
    >
      <div className="flex">
        <section className="flex items-center justify-center flex-col p-3">
          {loading && <Skeleton className="h-12 w-12 rounded-full" />}
          <img
            src={img}
            alt="Foto do produto"
            className={`max-w-[65px] ${loading ? "hidden" : ""}`}
            onLoad={() => setLoading(false)}
          />
        </section>
        <section className="flex flex-col flex-1 pt-1">
          <h1 className="font-bold text-lg w-2/3">{title}</h1>
          <span className="text-gray-400 text-md w-[90%] pt-1">
            {description}
          </span>
          <p className="pt-2 pb-3 text-orange-600 font-medium text-md">
            {priceVarejo && formatPrice(priceVarejo.toString())}
          </p>
        </section>
      </div>
    </Link>
  );
}

function SkeletonVariantProductCard() {
  return (
    <div className="flex flex-col bg-white w-full rounded h-auto border">
      <div className="flex items-center space-x-4 p-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  );
}
export function ProductCard(props: ProductCardProps) {
  const { type } = props;
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {type === "default" && (
        <DefaultVariantProductCard
          {...props}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {type === "list" && (
        <ListVariantProductCard
          {...props}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {type === "skeleton" && <SkeletonVariantProductCard />}
    </>
  );
}
