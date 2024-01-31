import { HeaderBack } from "@/components/interface/header-back";
import MobileTabBar from "@/components/ui/tab-bar";
import { Outlet } from "react-router-dom";
import { tabs } from "./tabs";
import { Loading } from "@/components/ui/loading";

export function ViewLayout() {
  return (
    <>
      <HeaderBack />
      <div className="flex flex-1 flex-col gap-4 p-5 pt-6">
        <Outlet />
        <MobileTabBar tabs={tabs} />
        <Loading/>
      </div>
    </>
  );
}
