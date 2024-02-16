import { DeliveryShippingInfo } from "@/components/interface/sections/delivery-shipping-info";

import { ProductCard } from "@/components/interface/cards/product-card";
import { useGetProducts } from "@/api/get-all-products";

import { useState, useRef, useEffect } from "react";
import { ViewProductDetailsDrawer } from "@/components/interface/drawer/confirm-disconnect";

const inactiveTabStyle =
  "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";
const tabButtonStyle =
  "flex h-11 w-full items-center justify-center text-sm font-medium border-b-2";
const activeTabStyle = "border-red-500 text-red-600";

export function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<string>("destaques");
  const [productType, setProductType] = useState<string>("all");

  useEffect(() => {
    if (activeTab === "destaques") {
      setProductType("all");
    } else {
      setProductType(activeTab);
    }
  }, [activeTab]);

  const {
    data: listProducts,
    isLoading,
    isRefetching,
    isError,
  } = useGetProducts(productType, activeTab);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabButton = (tabName: string, label: string) => (
    <button
      onClick={() => handleTabClick(tabName)}
      className={`${
        activeTab === tabName ? activeTabStyle : inactiveTabStyle
      } ${tabButtonStyle}`}
    >
      {label}
    </button>
  );

  const renderHighlightedItems = () => (
    <main className="block p-3 pt-10 relative">
      <div className="flex items-center justify-between w-full gap-1">
        <h1 className="font-bold text-xl text-gray-700">Destaques</h1>
      </div>
      <section
        ref={containerRef}
        className="flex overflow-x-auto gap-2 mt-3 no-scrollbar"
      >
        {isLoading && !isRefetching && <ProductCard type="skeleton" />}
        {isError && (
          <span className="text-md text-gray-500">
            Falha em obter os produtos em destaque.
          </span>
        )}
        {!isLoading && listProducts.length <= 0 && (
          <span className="text-md text-gray-500">
            Não há produtos em destaque.
          </span>
        )}
        {!isLoading &&
          listProducts &&
          listProducts.map((product: any) => (
            <ViewProductDetailsDrawer>
                <ProductCard
                  key={product.id}
                  type="default"
                  id={product.id}
                  title={product.title}
                  priceAtacado={product.priceAtacado}
                  priceVarejo={product.priceAtacado}
                  description={product.description}
                  img={product.img.url}
                />
            </ViewProductDetailsDrawer>
          ))}
      </section>
    </main>
  );

  const renderFilteredItems = () => (
    <main className="block p-3 pt-10">
      <div className="flex items-center justify-between w-full gap-1">
        {activeTab === "Pão" && (
          <h1 className="font-bold text-xl text-gray-700">
            Mostrando todos os Pães
          </h1>
        )}
        {activeTab === "Bolo" && (
          <h1 className="font-bold text-xl text-gray-700">
            Mostrando todos os Bolos
          </h1>
        )}
        {activeTab === "Rosca" && (
          <h1 className="font-bold text-xl text-gray-700">
            Mostrando todas as Roscas
          </h1>
        )}
      </div>
      <div className="flex flex-col mt-5 gap-2">
        {isLoading && !isRefetching && <ProductCard type="skeleton" />}
        {isError && (
          <span className="text-md text-gray-500">
            Falha em obter os produtos.
          </span>
        )}
        {!isLoading && listProducts.length <= 0 && (
          <span className="text-md text-gray-500">
            Não há produtos cadastrados.
          </span>
        )}
        {!isLoading &&
          listProducts &&
          listProducts.map((product: any) => (
            <ProductCard
              key={product.id}
              type="list"
              id={product.id}
              title={product.title}
              priceAtacado={product.priceAtacado}
              priceVarejo={product.priceAtacado}
              description={product.description}
              img={product.img.url}
            />
          ))}
      </div>
    </main>
  );

  return (
    <>
      <DeliveryShippingInfo time="15 à 20 minutos" isOpenCompany={true} />
      <div className="bg-white overflow-x-auto w-full" aria-label="Tabs">
        <div className="flex" style={{ overflowX: "auto" }}>
          {renderTabButton("destaques", "Destaques")}
          {renderTabButton("Pão", "Pães")}
          {renderTabButton("Bolo", "Bolos")}
          {renderTabButton("Rosca", "Roscas")}
        </div>
      </div>

      <div
        className={activeTab === "destaques" ? "block" : "hidden"}
        id="destaques"
      >
        {renderHighlightedItems()}
      </div>
      <div
        className={activeTab !== "destaques" ? "block" : "hidden"}
        id="filteredItems"
      >
        {renderFilteredItems()}
      </div>
    </>
  );
}
