import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center w-full">
        <Outlet />
      </div>
    </div>
  );
}
