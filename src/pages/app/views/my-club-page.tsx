import { ProductCardClub } from "@/components/interface/cards/product-card-club";
import { Button } from "@/components/ui/button";
import { Gem, Gift } from "lucide-react";

export function MyClubPage() {
  return (
    <>
      <div className="flex items-center justify-center w-full p-5 flex-col">
        <img src="/clube.png" alt="Club" />
      </div>
      <div className="flex w-full p-5 flex-col gap-2">
        <section className="flex items-center gap-2">
          <Gem />
          <span>
            Até <b className="text-[#EAA85C]">20%</b> de desconto.
          </span>
        </section>
        <section className="flex items-center gap-2">
          <Gift />
          <span>Presentes do clube!</span>
        </section>
      </div>
      <div className="flex w-full p-5 flex-col gap-2">
        <h1 className="font-bold">Pode entrar e aproveitar</h1>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col gap-3 w-full">
          <ProductCardClub discont={10} price={59.9} title="Plano básico" />
          <ProductCardClub
            discont={20}
            price={69.9}
            title="Plano Pães de qualidade"
          />
          <ProductCardClub discont={45} price={99.9} title="Plano Acrepan" />
        </div>
      </div>
      <div className="flex w-full mt-3">
        <Button className="w-full" size="lg">
          Entrar para o clube
        </Button>
      </div>
    </>
  );
}
