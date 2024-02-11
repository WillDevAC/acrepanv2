import { Clock10 } from "lucide-react";
import { useState } from "react";

export function HomePage() {
  const [activeTab, setActiveTab] = useState("destaques");

  const activeTabStyle = "border-red-500 text-red-600";
  const inactiveTabStyle =
    "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";
  const tabButtonStyle =
    "flex h-11 w-full items-center justify-center text-sm font-medium border-b-2";

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
          <span className="text-sm text-gray-500">
            Em destaque, surpreenda-se
          </span>
        </div>
        <section className="flex overflow-x-auto gap-5 mt-3">
          <article className="flex flex-col bg-white min-w-80 max-w-5 rounded h-auto relative">
            <div className="flex">
            <section id="photo-details" className="flex flex-col p-5">
                <img
                  src="/pao.png"
                  alt="Foto do produto"
                  className="max-w-14"
                />
              </section>
              <section id="details" className="flex flex-col gap-1 flex-1 pt-3">
                <h1 className="font-bold text-md">Pão francês</h1>
                <span className="text-xs text-left w-full text-gray-500">
                  Um pão dourado e crocante.
                </span>
                <div className="flex flex-col mt-3 pb-3">
                  <span className="text-xs text-gray-500">Preço/unidade</span>
                  <p className="font-bold text-red-600">R$ 0.00</p>
                </div>
              </section>
              <div className="absolute p-3 top-0 right-0">
                DESTAQUE
              </div>
            </div>
          </article>
        </section>
      </main>
    );
  };

  const renderFilteredItens = (activeTab: string) => {
    return <h1>Filtro: {activeTab}</h1>;
  };

  return (
    <>
      <section className="pr-4 pl-4 flex items-center justify-around w-full bg-white h-11 pt-8 pb-8">
        <div className="flex items-center gap-3">
          <Clock10 />
          <div className="flex flex-col">
            <h3 className="text-xs font-bold">Tempo médio</h3>
            <span className="text-xs">15 a 20 minutos</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-center text-green-600">
              Loja aberta
            </h3>
            <span className="text-xs text-center">das 13 às 22h</span>
          </div>
        </div>
      </section>
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
