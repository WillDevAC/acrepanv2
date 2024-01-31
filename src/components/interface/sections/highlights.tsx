import React from "react";

const highlights = [
  {
    id: 1,
    titulo: "Pão Francês",
    descricao: "Descrição do Destaque 1",
    preco: 19.99,
    imagem: "/pao.png",
  },
  {
    id: 2,
    titulo: "Destaque 2",
    descricao: "Descrição do Destaque 2",
    preco: 29.99,
    imagem: "/pao.png",
  },
  {
    id: 3,
    titulo: "Destaque 3",
    descricao: "Descrição do Destaque 3",
    preco: 39.99,
    imagem: "/pao.png",
  },
  {
    id: 4,
    titulo: "Destaque 4",
    descricao: "Descrição do Destaque 4",
    preco: 49.99,
    imagem: "/pao.png",
  },
];

const HighlightsSection: React.FC = () => {
  return (
    <div className="flex overflow-x-auto space-x-2 no-scrollbar">
      {highlights.map((destaque) => (
        <div
          key={destaque.id}
          className="flex-shrink-0 bg-white w-56 rounded-md overflow-hidden"
        >
          <div className="p-5">
            <img
              className="w-full max-h-28  object-contain mb-4"
              src={destaque.imagem}
              alt={destaque.titulo}
            />
          </div>
          <div className="px-6 py-2 pb-5">
            <div className="font-bold text-xl mb-2">{destaque.titulo}</div>
            <div className="flex flex-col">
              <span className="text-gray-600 text-xs mt-2">Preço/unidade</span>
              <p className="font-bold text-md text-red-600">R$ 20.00</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighlightsSection;
