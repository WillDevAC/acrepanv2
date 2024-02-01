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
import { formatPrice } from "@/lib/functions";
import { Minus, Plus } from "lucide-react";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export function ProductPage() {
  const { id } = useParams();

  const { data: productDetails, isFetching: isFetchingProductDetails } =
    useQuery({
      queryKey: ["products", "get-product-details", id],
      queryFn: () => GetProductDetails(id || ""),
    });

  if (isFetchingProductDetails) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col w-full min-h-full">
        <section className=" p-4">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src={productDetails.img.url}
                  alt={productDetails?.title}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center text-xl font-bold">
                    {productDetails?.title}
                  </h1>
                  <h1 className="text-xl font-bold text-red-500">
                    {formatPrice(productDetails?.priceVarejo).toString()}
                  </h1>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600 mt-7">
                    Método de compra:{" "}
                  </label>
                  <Select>
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
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Minus size={40} className="p-3 bg-slate-200 rounded-lg" />
              <h1 className="font-bold text-lg">0</h1>
              <Plus size={40} className="p-3 bg-slate-200 rounded-lg" />
            </div>
            <div className="flex items-center">
              <Button size="lg" className="w-full">Adicionar</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
