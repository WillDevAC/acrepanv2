import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Cookies from "js-cookie";

export function AuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const USER_TOKEN = Cookies.get("auth::token");

    if (USER_TOKEN) {
      navigate("/home");
      return;
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#f5f7f9]">
      <div className="flex flex-col items-center justify-center w-full">
        <Outlet />
      </div>
    </div>
  );
}
