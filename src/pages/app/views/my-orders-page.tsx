import { ProductOrderCard } from "@/components/interface/cards/product-order-card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MyOdersPage() {
  return (
    <>
        <Select>
          <SelectTrigger className="w-full mt-3">
            <SelectValue placeholder="Filtros" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filtros</SelectLabel>
              <SelectItem value="atacado">A caminho</SelectItem>
              <SelectItem value="varejo">Entregue</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      <div className="flex flex-col gap-3">
        <ProductOrderCard type="pending" path="/order/1"/>
        <ProductOrderCard type="wait" path="/pending-purshase/1"/>
      </div>
    </>
  );
}
