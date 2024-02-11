import { Clock10 } from "lucide-react";

interface DeliveryShippingInfoProps {
  time: string;
  isOpenCompany: boolean;
}

export function DeliveryShippingInfo({
  time = "",
  isOpenCompany = true,
}: DeliveryShippingInfoProps) {
  return (
    <>
      <section className="pr-4 pl-4 flex items-center justify-around w-full bg-white h-11 pt-8 pb-8">
        <div className="flex items-center gap-3">
          <Clock10 />
          <div className="flex flex-col">
            <h3 className="text-xs font-bold">Tempo médio</h3>
            <span className="text-xs">{time}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            {isOpenCompany && (
              <>
                <h3 className="text-xs font-bold text-center uppercase text-green-600">
                  Loja aberta
                </h3>
                <span className="text-xs text-center">das 13 às 22h</span>
              </>
            )}
            {!isOpenCompany && (
              <>
                <h3 className="text-xs font-bold text-center uppercase text-red-600">
                  Loja fechada
                </h3>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
