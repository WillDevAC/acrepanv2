import { useEffect, useState } from "react";

import { ProductCardCartItem } from "@/components/interface/cards/product-card-cart";
import { Button } from "@/components/ui/button";
import { getUserDetails } from "@/api/get-user-details";
import { useQuery } from "react-query";
import { Loading } from "@/components/ui/loading";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { ConfirmPurshase } from "@/components/interface/drawer/confirm-purshase";

export function MyCartPage() {
  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cartItems, setCartItems] = useState(storedCart);
  const [cartTotal, setCartTotal] = useState(0);

  const { toast } = useToast();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);

    const initialCartTotal = storedCart.reduce(
      (total: any, item: any) => total + item.total,
      0
    );
    setCartTotal(initialCartTotal);
  }, []);

  const { data: userDetails, isFetching: isLoadingUserDetails } = useQuery({
    queryKey: ["get-user-details"],
    queryFn: getUserDetails,
    staleTime: 10000,
  });

  const handleIncrement = (index: any) => {
    const updatedCart = [...cartItems];
    const { type, quantity, price } = updatedCart[index];

    if (type === "varejo" && quantity >= 9) {
      return;
    }

    updatedCart[index].quantity += 1;
    updatedCart[index].total = price * updatedCart[index].quantity;

    const newCartTotal = updatedCart.reduce(
      (total, item) => total + item.total,
      0
    );

    setCartItems(updatedCart);
    setCartTotal(newCartTotal);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrement = (index: any) => {
    const updatedCart = [...cartItems];
    const { type, quantity, price } = updatedCart[index];

    if (
      (type === "varejo" && quantity === 1) ||
      (type === "atacado" && quantity === 10)
    ) {
      updatedCart.splice(index, 1);
    } else if (quantity > 0) {
      updatedCart[index].quantity -= 1;
      updatedCart[index].total = price * updatedCart[index].quantity;
    }

    const newCartTotal = updatedCart.reduce(
      (total, item) => total + item.total,
      0
    );

    setCartItems(updatedCart);
    setCartTotal(newCartTotal);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (isLoadingUserDetails) {
    return <Loading />;
  }

  const handelChangeMethodPayment = () => {
    toast({
      variant: "destructive",
      description: "Funcionalidade indisponivel.",
      action: <ToastAction altText="Fechar">Fechar</ToastAction>,
    });
  };

  const handleFinishPurchase = () => {
    const formattedProducts = cartItems.map((item: any) => ({
      productId: item.id,
      qtd: item.quantity,
      obs: item.observations || "",
    }));

    const purchaseData = {
      products: formattedProducts,
      type_payment: "PIX",
      deliveryDate: "2024-02-01",
      obs: "",
    };

    console.log("Dados da compra:", purchaseData);
  };

  return (
    <>
      {cartItems.length <= 0 && (
        <span className="text-md text-gray-500 pt-3">
          Não há produtos na sua sacola.
        </span>
      )}

      {cartItems.length > 0 && (
        <>
          {cartItems.map((item: any, index: any) => (
            <ProductCardCartItem
              key={item.id}
              title={item.name}
              price={item.price}
              quantity={item.quantity}
              typeOrder={item.type}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              index={index}
            />
          ))}

          <div className="flex flex-col border-t-2 pt-5 gap-5">
            <div className="flex items-center justify-between">
              <h1 className="font-bold">Pagamento pelo app</h1>
              <div onClick={handelChangeMethodPayment} className="text-red-500">
                Trocar
              </div>
            </div>
            <div className="flex items-center pb-3 gap-3">
              <img
                src="/pix.webp"
                alt="Pix Method Payment"
                className="max-w-8"
              />
              <h1 className="font-medium">PIX</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center border-t-2 pt-5">
              <p className="text-sm font-semibold">Total:</p>
              <p className="text-sm ">{`R$ ${cartTotal.toFixed(2)}`}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Desconto do clube:</p>
              <p className="text-sm ">R$ 0.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Subtotal:</p>
              <p className="text-sm ">{`R$ ${Math.max(cartTotal, 0).toFixed(
                2
              )}`}</p>
            </div>
          </div>
          <ConfirmPurshase>
            <Button onClick={handleFinishPurchase} className="w-full">
              Finalizar compra
            </Button>
          </ConfirmPurshase>
        </>
      )}
    </>
  );
}
