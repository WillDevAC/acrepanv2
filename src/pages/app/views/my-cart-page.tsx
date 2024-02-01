import { ProductCardCartItem } from "@/components/interface/cards/product-card-cart";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function MyCartPage() {
  return (
    <>
      <ProductCardCartItem />
      <ProductCardCartItem />
      <div className="flex flex-col border-t-2 pt-5 gap-5">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Pagamento pelo app</h1>
          <Link to="#" className="text-red-500">
            Trocar
          </Link>
        </div>
        <div className="flex items-center pb-3 gap-3">
          <img src="/pix.webp" alt="Pix Method Payment" className="max-w-8" />
          <h1 className="font-medium">PIX</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center border-t-2 pt-5">
          <p className="text-md font-semibold">Total:</p>
          <p className="text-md font-semibold">R$ 40.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold">Desconto do clube:</p>
          <p className="text-md font-semibold">R$ 0.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold">Subtotal:</p>
          <p className="text-md font-semibold">R$ 35.00</p>
        </div>
      </div>

      <Button>Finalizar compra</Button>
    </>
  );
}
