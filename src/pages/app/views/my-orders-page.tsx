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
              <SelectItem value="shipping">A caminho</SelectItem>
              <SelectItem value="shiped">Entregue</SelectItem>
              <SelectItem value="canceled">Cancelados</SelectItem>
              <SelectItem value="agended">Agendados</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <main className="flex flex-col gap-2 mt-5">
        <ProductOrderCard
          id="0"
          order="#2923"
          shippingMethod="IMEDIATO"
          status="shipping"
          total="R$ 120.00"
          key={0}
        />
      </main>
    </>
  );
}
