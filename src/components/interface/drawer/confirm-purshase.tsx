import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface ConfirmPurshaseProps {
    children: React.ReactNode,
}

export function ConfirmPurshase({ children }: ConfirmPurshaseProps) {
  return (
    <Drawer>
      <DrawerTrigger>
        { children }
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Você confirma a sua compra?</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Finalizar compra</Button>
          <DrawerClose>
            <Button variant="outline" className="w-full">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
