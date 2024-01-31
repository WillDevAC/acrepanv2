import { Header } from "@/components/interface/header";
import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import Cookies from "js-cookie";
import MobileTabBar from "@/components/ui/tab-bar";
import { Gift, Home, Package2 } from "lucide-react";

export function AppLayout() {
  const navigate = useNavigate();

  const tabs = [
    {
      id: "home",
      label: "Home",
      content: (
        <div className="flex flex-col items-center gap-2 font-medium">
          <Home size={20} className="text-slate-600" />
          <span className="text-sm text-slate-600">Home</span>
        </div>
      ),
    },
    {
      id: "pedidos",
      label: "pedidos",
      content: (
        <div className="flex flex-col items-center gap-2 font-medium">
          <Package2 size={20} className="text-slate-600" />
          <span className="text-sm text-slate-600">Pedidos</span>
        </div>
      ),
    },
    {
      id: "clube",
      label: "clube",
      content: (
        <div className="flex flex-col items-center gap-2 font-medium">
          <Gift size={20} className="text-slate-600" />
          <span className="text-sm text-slate-600">Clube</span>
        </div>
      ),
    },
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
