import { Calendar, CircleDollarSign, ReceiptText } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductOrderCardProps {
  type: string;
  path: string;
}

export function ProductOrderCard({
  type,
  path = "/order/1",
}: ProductOrderCardProps) {
  return (
    <>
      <div className="bg-white flex flex-col h-auto p-3 gap-3 rounded border">
        <div className="flex items-center w-full justify-center">
          <img src="/acrepan-auth.png" alt="" className="max-w-56" />
        </div>
        <Link className="p-3 flex flex-col gap-3" to={path}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <p className="font-medium text-sm">Data do pedido: </p>
            </div>
            <span className="text-gray-500">03/02/2024</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ReceiptText size={20} />
              <p className="font-medium text-sm">Método de pagamento: </p>
            </div>
            <span className="text-gray-500">PIX</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CircleDollarSign size={20} />
              <p className="font-medium text-sm">Total do pedido: </p>
            </div>
            <span className="text-gray-500">R$ 50.00</span>
          </div>
          {type === "pending" && (
            <div className=" p-2 mt-3 rounded w-full flex items-center justify-center text-white font-medium text-sm bg-blue-500 h-auto">
              Em preparação
            </div>
          )}
          {type === "wait" && (
            <div className=" p-2 mt-3 rounded w-full flex items-center justify-center text-white font-medium text-sm bg-slate-500 h-auto">
              Pendente
            </div>
          )}
        </Link>
      </div>
    </>
  );
}
