import Cookies from "js-cookie";

import { useEffect } from "react";

import { Header } from "@/components/interface/header";
import { Outlet, useNavigate } from "react-router-dom";
import { tabs } from "./tabs";

import MobileTabBar from "@/components/ui/tab-bar";

export function AppLayout() {
  const navigate = useNavigate();
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
