import { useQuery } from "react-query";
import { GetHighlights } from "@/api/get-highlights";

import { ProductCard } from "../cards/product-card";
import { ProductCardSkeleton } from "../cards/product-card-skeleton";

export function HighlightsSection() {
  const { data: ProductsHighlights, isFetching: isFetchingProductsHighlights } =
    useQuery({
      queryKey: ["products", "get-highlights"],
      queryFn: GetHighlights,
    });

  return (
    <>
      <h1 className="text-lg font-bold">Destaques da semana</h1>
      <div className="flex overflow-x-auto space-x-2 no-scrollbar">
        {isFetchingProductsHighlights && (
          <ProductCardSkeleton/>
        )}
        {!isFetchingProductsHighlights &&
          ProductsHighlights &&
          ProductsHighlights.length > 0 &&
          ProductsHighlights.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              img={product.img.url}
              title={product.title}
              priceAtacado={product.priceAtacado}
              priceVarejo={product.priceVarejo}
            />
          ))}
        {!isFetchingProductsHighlights &&
          (!ProductsHighlights || ProductsHighlights.length === 0) && (
            <p className="text-gray-600">Nenhum resultado encontrado.</p>
          )}
      </div>
    </>
  );
}
