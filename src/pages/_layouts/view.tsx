import { HeaderBack } from "@/components/interface/header-back";
import { Outlet, useLocation } from "react-router-dom";

export function ViewLayout() {
  const location = useLocation();

  let title = "";

  if (location.pathname.includes("/product")) {
    title = "Detalhes do Produto";
  } else if (location.pathname.includes("/my-cart")) {
    title = "Meu Carrinho";
  } else if (location.pathname.includes("/my-orders")) {
    title = "Meus pedidos";
  } else if (location.pathname.includes("/my-club")) {
    title = "Clube de beneficios";
  }

  return (
    <>
      <HeaderBack title={title}/>
      <div className="flex flex-1 flex-col gap-4 p-5 pt-6">
        <Outlet />
      </div>
    </>
  );
}
