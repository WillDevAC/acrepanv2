export function ProductCardCartItem() {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <img
          src="/pao.png"
          alt="Product"
          className="mr-4 max-w-8"
        />
        <div>
          <p className="text-sm font-semibold">Nome do Produto</p>
          <p className="text-xs text-gray-500">Quantidade: 2</p>
        </div>
      </div>
      <p className="text-sm font-semibold">$20.00</p>
    </div>
  );
}
