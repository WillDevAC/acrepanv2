import { GetProductDetails } from "@/api/get-product-details";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { formatPrice } from "@/lib/functions";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";

export function ProductPage() {
  const { id } = useParams();

  const [quantityVarejo, setQuantityVarejo] = useState(1);
  const [quantityAtacado, setQuantityAtacado] = useState(10);
  const [selectedType, setSelectedType] = useState("varejo");
  const [observations, setObservations] = useState("");

  const navigate = useNavigate();

  const { data: productDetails, isFetching: isFetchingProductDetails } =
    useQuery({
      queryKey: ["products", "get-product-details", id],
      queryFn: () => GetProductDetails(id || ""),
    });

  const { toast } = useToast();

  const addToCart = () => {
    const newCartItem = {
      id: productDetails.id,
      name: productDetails.title,
      image: productDetails.img.url,
      type: selectedType,
      observations: observations,
      price:
        selectedType === "atacado"
          ? parseFloat(productDetails.priceAtacado)
          : parseFloat(productDetails.priceVarejo),
      quantity: selectedType === "atacado" ? quantityAtacado : quantityVarejo,
      total:
        selectedType === "atacado"
          ? parseFloat(productDetails.priceAtacado) * quantityAtacado
          : parseFloat(productDetails.priceVarejo) * quantityVarejo,
    };

    const existingCartItems = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItemIndex = existingCartItems.findIndex(
      (item: any) => item.id === productDetails.id && item.type === selectedType
    );

    if (existingItemIndex !== -1) {
      const existingItem = existingCartItems[existingItemIndex];

      if (
        selectedType === "varejo" &&
        existingItem.quantity + newCartItem.quantity > 9
      ) {
        toast({
          variant: "destructive",
          description: "Limite de 9 itens excedido.",
          action: (
            <ToastAction
              altText="Tentar novamente"
              onClick={() => navigate("/my-cart")}
            >
              Ver carrinho
            </ToastAction>
          ),
        });
        return;
      }

      existingItem.quantity += newCartItem.quantity;
      existingItem.total += newCartItem.total;
    } else {
      if (selectedType === "varejo" && newCartItem.quantity > 9) {
        toast({
          variant: "destructive",
          description: "Limite de 9 itens excedido.",
          action: (
            <ToastAction
              altText="Tentar novamente"
              onClick={() => navigate("/my-cart")}
            >
              Ver carrinho
            </ToastAction>
          ),
        });
        return;
      }

      existingCartItems.push(newCartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCartItems));

    navigate("/my-cart");

    Swal.fire({
      text: "Produto adicionado ao carrinho.",
      showConfirmButton: false,
      icon: "success",
    });
  };

  const handleObservationsChange = (event: any) => {
    setObservations(event.target.value);
  };

  if (isFetchingProductDetails) {
    return <Loading />;
  }

  const handleSelectChange = (selectedItem: string) => {
    setSelectedType(selectedItem);
  };

  const handleIncrement = () => {
    if (selectedType === "varejo" && quantityVarejo < 9) {
      setQuantityVarejo(quantityVarejo + 1);
    } else if (selectedType === "atacado") {
      setQuantityAtacado(quantityAtacado + 1);
    }
  };

  const handleDecrement = () => {
    if (selectedType === "varejo" && quantityVarejo > 1) {
      setQuantityVarejo(quantityVarejo - 1);
    } else if (selectedType === "atacado" && quantityAtacado > 10) {
      setQuantityAtacado(quantityAtacado - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full min-h-full">
        <section className=" p-4">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex w-full items-center justify-center">
                <img
                  src={productDetails.img.url}
                  alt={productDetails?.title}
                  className="max-w-44 h-auto"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center text-xl font-bold">
                    {productDetails?.title}
                  </h1>
                  <h1 className="text-xl font-bold text-red-500">
                    {selectedType === "varejo" &&
                      formatPrice(productDetails?.priceVarejo).toString()}
                    {selectedType === "atacado" &&
                      formatPrice(productDetails?.priceAtacado).toString()}
                  </h1>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600 mt-7">
                    Método de compra:{" "}
                  </label>
                  <Select
                    onValueChange={handleSelectChange}
                    value={selectedType}
                  >
                    <SelectTrigger className="w-full mt-3">
                      <SelectValue placeholder="Selecione (Atacado, Varejo)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Método de compra</SelectLabel>
                        <SelectItem value="atacado">Atacado</SelectItem>
                        <SelectItem value="varejo">Varejo</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600 mt-8">
                    Observações:
                  </label>
                  <Textarea
                    placeholder="Digite aqui suas observações."
                    className="mt-3"
                    rows={5}
                    value={observations}
                    onChange={handleObservationsChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {selectedType === "atacado" && (
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Minus
                  size={40}
                  className="p-3 bg-slate-200 rounded-lg cursor-pointer"
                  onClick={handleDecrement}
                />
                <h1 className="font-bold text-lg">{quantityAtacado}</h1>
                <Plus
                  size={40}
                  className="p-3 bg-slate-200 rounded-lg cursor-pointer"
                  onClick={handleIncrement}
                />
              </div>
              <div className="flex items-center">
                <Button
                  size="lg"
                  className="flex items-center justify-between w-full gap-3"
                  onClick={addToCart}
                >
                  Adicionar
                  <span>
                    {selectedType === "atacado" &&
                      formatPrice(
                        (
                          productDetails.priceAtacado * quantityAtacado
                        ).toString()
                      )}
                  </span>
                </Button>
              </div>
            </div>
          )}

          {selectedType === "varejo" && (
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Minus
                  size={40}
                  className="p-3 bg-slate-200 rounded-lg cursor-pointer"
                  onClick={handleDecrement}
                />
                <h1 className="font-bold text-lg">{quantityVarejo}</h1>
                <Plus
                  size={40}
                  className="p-3 bg-slate-200 rounded-lg cursor-pointer"
                  onClick={handleIncrement}
                />
              </div>
              <div className="flex items-center">
                <Button
                  size="lg"
                  className="flex items-center justify-between w-full gap-3"
                  onClick={addToCart}
                >
                  Adicionar
                  <span>
                    {selectedType === "varejo" &&
                      formatPrice(
                        (productDetails.priceVarejo * quantityVarejo).toString()
                      )}
                  </span>
                </Button>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
