import { Purshase } from "@/api/product-purshase";
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
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "react-query";

interface ConfirmPurshaseProps {
  cartItems: any;
  children: React.ReactNode;
}

export function ConfirmPurshase({ children, cartItems }: ConfirmPurshaseProps) {
  const { toast } = useToast();
  const date = new Date().toISOString();

  const formattedProducts = cartItems.map((item: any) => ({
    productId: item.id,
    qtd: item.quantity,
    obs: item.observations || "",
  }));

  const purchaseData = {
    products: formattedProducts,
    type_payment: "pix",
    deliveryDate: date,
    obs: "",
  };

  const { mutateAsync: purshase } = useMutation({
    mutationFn: () => Purshase(purchaseData),
  });

  const handleFinishPurchase = async () => {
    try {
      purshase();
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Falha ao realizar a compra.",
        action: (
          <ToastAction altText="Tentar novamente">Tentar novamente</ToastAction>
        ),
      });
    }
  };

  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Você confirma a sua compra?</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <Button onClick={handleFinishPurchase}>Finalizar compra</Button>
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
