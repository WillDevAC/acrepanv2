import { Calendar, CircleDollarSign, ReceiptText } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductOrderCardProps {
  id: string;
  order: string;
  shippingMethod: string;
  total: string;
  status: "pending" | "payed" | "shipping" | "arrived" | "canceled" | "pending";
}

export function ProductOrderCard() {
  return (
    <>
      <Link
        className="bg-white flex flex-col h-auto p-3 gap-3 rounded border relative"
        to={'#'}
      >
        <div className="absolute top-0 right-0 p-2 text-white font-medium text-sm bg-blue-500 h-auto">
          Em andamento
        </div>
        <div className="flex items-center">
          <img src="/acrepan-auth.png" alt="" className="max-w-56"/>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={20}/>
              <p className="font-medium">Data do pedido: </p>
            </div>
            <span className="text-gray-500">03/02/2024</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ReceiptText size={20}/>
              <p className="font-medium">Método de pagamento: </p>
            </div>
            <span className="text-gray-500">PIX</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CircleDollarSign size={20}/>
              <p className="font-medium">Total do pedido: </p>
            </div>
            <span className="text-gray-500">R$ 20.00</span>
          </div>
        </div>
      </Link>
    </>
  );
}
