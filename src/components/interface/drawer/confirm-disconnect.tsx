import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface ConfirmDisconnectProps {
  children: React.ReactNode;
}

import Cookies from 'js-cookie'

import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

export function ConfirmDisconnect({ children }: ConfirmDisconnectProps) {
  const navigate = useNavigate();

  const handleDisconnect = () => {
    localStorage.removeItem("cart");
    Cookies.remove("auth::token");
    navigate("/sign-in", { replace: true });
  };

  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Você deseja realmente sair?</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <Button onClick={handleDisconnect}>Desconectar</Button>
          <DrawerClose>
            <Button variant="outline" className="w-full">
              Cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
