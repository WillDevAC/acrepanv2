import { ArrowLeft, ReceiptText } from "lucide-react";

import { useNavigate } from "react-router-dom";

interface HeaderBackProps {
  title: string;
}

export function HeaderBack({ title }: HeaderBackProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="bg-white shadow-sm pl-5 pr-5 pt-5 pb-5 h-auto sticky top-0 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <ArrowLeft className="text-slate-700" onClick={handleBack} />
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
      {title === "Clube de beneficios" && <ReceiptText />}
    </header>
  );
}
