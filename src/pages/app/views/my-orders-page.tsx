import { ProductOrderCard } from "@/components/interface/cards/product-order-card";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export function MyOdersPage() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtros" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filtros</SelectLabel>
              <SelectItem value="pending">Pendentes</SelectItem>
              <SelectItem value="preparate">Em preparação</SelectItem>
              <SelectItem value="shipping">A caminho</SelectItem>
              <SelectItem value="shiped">Entregue</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <main className="flex flex-col gap-2 mt-5">
        <ProductOrderCard
        />
      </main>
    </>
  );
}
