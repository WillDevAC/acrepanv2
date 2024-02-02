import { Link } from "react-router-dom";

interface ProductOrderCardProps {
  id: string;
  order: string;
  shippingMethod: string;
  total: string;
  status: "pending" | "payed" | "shipping" | "arrived" | "canceled" | "pending";
}

export function ProductOrderCard({
  order,
  shippingMethod,
  total,
  status,
}: ProductOrderCardProps) {
  return (
    <>
      <Link
        className="bg-white flex flex-col h-auto p-3 gap-3 rounded shadow-sm"
        to={'#'}
      >
        <p>
          Pedido <b>{order}</b>
        </p>
        <div className="flex w-full items-center justify-between">
          <p className="font-bold">Método de entrega: </p>
          <span className="text-gray-400">{shippingMethod}</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="font-bold">Valor total: </p>
          <span className="text-gray-400">R$ {total}</span>
        </div>
        <div className="flex">
          {status === "pending" && (
            <button className="h-10 rounded bg-slate-300 text-slate-500 font-medium flex w-full items-center justify-center">
              Pendente
            </button>
          )}
          {status === "canceled" && (
            <button className="h-10 rounded bg-red-300 text-red-500 font-medium flex w-full items-center justify-center">
              Cancelado
            </button>
          )}
          {status === "arrived" && (
            <button className="h-10 rounded bg-green-300 text-green-500 font-medium flex w-full items-center justify-center">
              Entregue
            </button>
          )}
          {status === "shipping" && (
            <button className="h-10 rounded bg-blue-300 text-blue-500 font-medium flex w-full items-center justify-center">
              A caminho
            </button>
          )}
        </div>
      </Link>
    </>
  );
}
