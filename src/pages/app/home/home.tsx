import { FilterSection } from "@/components/interface/sections/filters";
import HighlightsSection from "@/components/interface/sections/highlights";

export function HomePage() {
  return (
    <>
      <FilterSection />
      <h1 className="text-lg font-bold">Destaques da semana</h1>
      <HighlightsSection/>
    </>
  );
}
