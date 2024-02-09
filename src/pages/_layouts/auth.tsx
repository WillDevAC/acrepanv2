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
    <div className="flex p-5 h-screen w-screen bg-white">
      <div className="flex flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
}
