import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

export function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const USER_TOKEN = Cookies.get("auth::token");

    if (!USER_TOKEN) {
      navigate("/sign-in");
      return;
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <h1>Header</h1>

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
