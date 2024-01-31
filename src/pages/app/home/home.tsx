import { useState } from "react";

import { HighlightsSection } from "@/components/interface/sections/highlights";
import { FilteredCategory } from "@/components/interface/sections/filtered-category";
import { FilterSection } from "@/components/interface/sections/filters";

export function HomePage() {
  const [filterItem, setFilterItem] = useState("destaques");

  return (
    <>
      <FilterSection setFilterItem={setFilterItem} filterItem={filterItem} />
      {filterItem === "destaques" ? (
        <HighlightsSection />
      ) : (
        <FilteredCategory itemByFilter={filterItem} />
      )}
    </>
  );
}
