import Lottie from "lottie-react";

import PendingPayment from "../../../json/loading.json";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PendingPurshasePage() {
  const [text, setText] = useState("lasdmamsdmm@,asdmamdmmasmdamdsm");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center h-[70vh]">
      <div className="flex items-center justify-center">
        <Lottie animationData={PendingPayment} loop={true} />
      </div>
      <h1 className="font-medium text-xl">Pedido aguardando pagamento</h1>
      <span className="pt-3 text-center text-sm text-gray-500">
        Copie o código abaixo e utilize o Pix Copia e Cola no
        <br />
        aplicativo que você vai fazer o pagamento:
      </span>
      <div className=" flex pt-5 w-full p-10 gap-2">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-gray-200 text-gray-400"
          disabled
        />
        <CopyToClipboard text={text} onCopy={handleCopy}>
          <Button
            className={` ${
              copied ? "bg-red-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {copied ? "Copiado!" : "Copiar"}
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
