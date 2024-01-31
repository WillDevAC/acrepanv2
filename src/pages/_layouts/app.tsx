import { Header } from "@/components/interface/header";
import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import Cookies from "js-cookie";
import MobileTabBar from "@/components/ui/tab-bar";

export function AppLayout() {
  const navigate = useNavigate();

  const tabs = [
    { id: "home", label: "Home", content: <div>Conteúdo da Tab 1</div> },
    { id: "pedidos", label: "Pedidos", content: <div>Conteúdo da Tab 2</div> },
    { id: "clube", label: "Clube", content: <div>Conteúdo da Tab 2</div> },
    { id: "perfil", label: "Perfil", content: <div>Conteúdo da Tab 2</div> },
  ];

  useEffect(() => {
    const USER_TOKEN = Cookies.get("auth::token");

    if (!USER_TOKEN) {
      navigate("/sign-in");
      return;
    }
    navigate("/home");
  }, [navigate]);

  return (
    <>
      <div className="flex min-h-screen flex-col antialiased bg-[#f5f7f9]">
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-5 pt-6">
          <Outlet />
        </div>
        <MobileTabBar tabs={tabs} />
      </div>
    </>
  );
}
