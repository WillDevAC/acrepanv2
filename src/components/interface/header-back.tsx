import { ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";

export function HeaderBack() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <header className="bg-white shadow-sm pl-5 pr-5 pt-5 pb-5 h-auto sticky top-0 flex items-center gap-3">
      <div className="flex bg-slate-200 p-1 rounded-lg" onClick={handleBack}>
        <ArrowLeft className="text-slate-700"/>
      </div>
      <h1 className="text-lg font-bold">Visualizar produto</h1>
    </header>
  );
}
