import { useQuery } from "react-query";

import { GetFilteredProduct } from "@/api/get-product-filtered";
import { ProductListItemSkeleton } from "../lists/product-list-item-skeleton";
import { ProductListItem } from "../lists/product-list-item";

interface FilteredCategoryProps {
  itemByFilter: string;
}

export function FilteredCategory({ itemByFilter }: FilteredCategoryProps) {
  const queryParamsProductFiltered = {
    searchItem: itemByFilter,
  };

  const { data: productFiltered, isFetching: isFetchingProductFiltered } =
    useQuery({
      queryKey: ["products", "get-filtered-product", itemByFilter],
      queryFn: () => GetFilteredProduct(queryParamsProductFiltered),
    });

  return (
    <>
      <h1 className="text-lg">
        Mostrando todas os <strong>{itemByFilter}</strong>
      </h1>
      <main className="flex flex-col gap-3">
        {productFiltered?.length === 0 && !isFetchingProductFiltered && (
          <span className="text-gray-600 text-md pt-5">
            Nenhum produto encontrado.
          </span>
        )}
        {isFetchingProductFiltered && <ProductListItemSkeleton />}
        {!isFetchingProductFiltered && (
          productFiltered?.map((product) => (
            <ProductListItem
              key={product.id}
              id={product.id}
              image={product.img.url}
              priceVarejo={product.priceVarejo}
              priceAtacado={product.priceAtacado}
              title={product.title}
            />
          ))
        )}
      </main>
    </>
  );
}
