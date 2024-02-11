import { Menu, ShoppingBag } from "lucide-react";
import { MenuSheet } from "./sheets/menu-sheet";

export function Header() {
  return (
    <header className="bg-white h-14 flex items-center justify-between pr-4 pl-4">
      <section className="flex items-center">
        <MenuSheet>
          <Menu />
        </MenuSheet>
      </section>
      <section className="flex items-center justify-center">
        <img
          src="/acrepan-auth-horizontal.png"
          alt="logo"
          className="max-w-24"
        />
      </section>
      <section className="flex items-center">
        <ShoppingBag className="relative" />
        <div className="absolute top-0 right-0 m-3 bg-red-500 rounded-xl h-4 w-4 flex items-center justify-center text-xs text-white ">
          0
        </div>
      </section>
    </header>
  );
}
