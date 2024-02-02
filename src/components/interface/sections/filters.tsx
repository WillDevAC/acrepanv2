import { useQuery, useQueryClient } from "react-query";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { GetCategorys } from "@/api/get-categories";
import { Skeleton } from "@/components/ui/skeleton";

interface FilterSectionProps {
  setFilterItem: Function;
  filterItem: string;
}

export function FilterSection({
  setFilterItem,
  filterItem,
}: FilterSectionProps) {
  const queryClient = useQueryClient();

  const handleSelectChange = (selectedItem: string) => {
    setFilterItem(selectedItem);
    queryClient.invalidateQueries("get-filtered-product");
  };

  const { data: CategoriesList, isFetching: isFetchingCategories } = useQuery({
    queryKey: ["products", "get-categories"],
    queryFn: GetCategorys,
  });

  return (
    <section className="flex items-center justify-end">
      {isFetchingCategories && (
        <div className="bg-white p-3 w-36 rounded">
          <Skeleton className="h-4 w-full" />
        </div>
      )}
      {!isFetchingCategories && (
        <Select onValueChange={handleSelectChange} value={filterItem}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Filtros" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categorias</SelectLabel>
              <SelectItem value="destaques">Destaques</SelectItem>
              {CategoriesList &&
                CategoriesList.map((category) => (
                  <SelectItem value={category.title} key={category.id}>
                    {category.title}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </section>
  );
}
