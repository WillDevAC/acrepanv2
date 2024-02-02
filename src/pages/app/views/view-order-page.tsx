import { Badge } from "@/components/ui/badge";
import { CircleDollarSign, MapPin, Store } from "lucide-react";

export function ViewOrderPage() {
  return (
    <>
      <div className="flex flex-col p-5 gap-7">
        <div className="flex gap-5">
          <section className="flex">
            <Store />
          </section>
          <section className="flex flex-col gap-2">
            <h1 className="text-md font-bold">ACREPAN PÃES FINOS</h1>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">
                3x - pão francês - varejo
              </span>
              <span className="text-gray-500 text-sm">
                0x - pão caseirinho - varejo
              </span>
              <span className="text-gray-500 text-sm">
                10x - pão redondinho - atacado
              </span>
            </div>
            <div className="flex pt-5">
              <Badge variant="secondary">Em preparação</Badge>
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-1 pt-3">
          <p className="font-bold text-md">Detalhes do pedido: </p>
          <section className="flex items-center justify-between text-sm">
            <p>Subtotal: </p>
            <span>R$ 00,00</span>
          </section>
          <section className="flex items-center justify-between text-sm">
            <p>Desconto do clube: </p>
            <span>-</span>
          </section>
          <section className="flex items-center justify-between">
            <p className="font-bold">Total: </p>
            <span>R$ 00,00</span>
          </section>
        </div>
        <h1 className="font-semibold text-md">Entrega e Pagamento</h1>
        <div className="p-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <MapPin />
            <div className="flex flex-col">
              <p className="font-semibold ">Travessa neutel maia, 12</p>
              <span className="text-gray-500 text-sm">
                Travessa neutel maia, 12
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CircleDollarSign />
            <div className="flex flex-col">
              <p className="font-semibold">Método de pagamento</p>
              <span className="text-gray-500 text-sm">Pix</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
