import { ProductCard } from "@/components/interface/cards/product-card";
import { DeliveryShippingInfo } from "@/components/interface/sections/delivery-shipping-info";
import { useState } from "react";

export function HomePage() {
  const [activeTab, setActiveTab] = useState("destaques");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabButton = (tabName: string, label: string) => (
    <button
      onClick={() => handleTabClick(tabName)}
      className={`
        ${activeTab === tabName ? activeTabStyle : inactiveTabStyle}
        ${tabButtonStyle}
      `}
    >
      {label}
    </button>
  );

  const renderHighlitedsItens = () => {
    return (
      <main className="block p-3 pt-10">
        <div className="flex flex-col w-full gap-1">
          <h1 className="font-bold text-xl text-gray-700">Destaques</h1>
        </div>
        <section className="flex overflow-x-auto gap-2 mt-3 no-scrollbar">
          <ProductCard
            id="0"
            img="/pao.png"
            priceAtacado={12.0}
            priceVarejo={13.0}
            title="PÃO DE ALHO"
          />
          <ProductCard
            id="0"
            img="/pao.png"
            priceAtacado={12.0}
            priceVarejo={13.0}
            title="PÃO DE ALHO"
          />
          <ProductCard
            id="0"
            img="/pao.png"
            priceAtacado={12.0}
            priceVarejo={13.0}
            title="PÃO DE ALHO"
          />
        </section>
      </main>
    );
  };

  const renderFilteredItens = (activeTab: string) => {
    return <h1>Filtro: {activeTab}</h1>;
  };

  const activeTabStyle = "border-red-500 text-red-600";
  const inactiveTabStyle =
    "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";
  const tabButtonStyle =
    "flex h-11 w-full items-center justify-center text-sm font-medium border-b-2";

  return (
    <>
      <DeliveryShippingInfo time="15 à 20 minutos" isOpenCompany={true} />
      <div className="bg-white overflow-x-auto w-full" aria-label="Tabs">
        <div className="flex" style={{ overflowX: "auto" }}>
          {renderTabButton("destaques", "Destaques")}
          {renderTabButton("paes", "Pães")}
          {renderTabButton("bolos", "Bolos")}
          {renderTabButton("roscas", "Roscas")}
        </div>
      </div>

      <div
        className={`${activeTab === "destaques" ? "block" : "hidden"}`}
        id="destaques"
      >
        {renderHighlitedsItens()}
      </div>
      <div className={`${activeTab === "paes" ? "block" : "hidden"}`} id="paes">
        {renderFilteredItens(activeTab)}
      </div>
      <div
        className={`${activeTab === "bolos" ? "block" : "hidden"}`}
        id="bolos"
      >
        {renderFilteredItens(activeTab)}
      </div>
      <div
        className={`${activeTab === "roscas" ? "block" : "hidden"}`}
        id="roscas"
      >
        {renderFilteredItens(activeTab)}
      </div>
    </>
  );
}
