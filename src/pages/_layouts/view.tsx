import { HeaderBack } from "@/components/interface/header-back";
import { Outlet } from "react-router-dom";
export function ViewLayout() {
  return (
    <>
      <HeaderBack />
      <div className="flex flex-1 flex-col gap-4 p-5 pt-6">
        <Outlet />
      </div>
    </>
  );
}
