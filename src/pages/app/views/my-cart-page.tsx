import { ProductCardCartItem } from "@/components/interface/cards/product-card-cart";

export function MyCartPage() {
  return (
    <>
      <ProductCardCartItem />
      <ProductCardCartItem />

      <div className="flex justify-between items-center border-t-2 py-2">
        <p className="text-lg font-semibold">Total:</p>
        <p className="text-lg font-semibold">$40.00</p>
      </div>

      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
        Finalizar Compra
      </button>
    </>
  );
}
