import { CardWithForm } from "@/components/interface/cards/card-with-form";
import { FilterSection } from "@/components/interface/sections/filters";

export function HomePage() {
  return (
    <>
      <FilterSection />
      <h1 className="text-lg font-bold">Destaques da semana</h1>
      <CardWithForm/>
    </>
  );
}
