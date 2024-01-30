import { useState } from "react";

import { updateProfileAddress } from "@/api/update-address-profile";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { useMutation, useQueryClient } from "react-query";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const schema = z.object({
  cep: z
    .string()
    .refine((value) => /^\d+$/.test(value), {
      message: "CEP deve conter apenas números",
    })
    .refine((value) => value.length > 0, { message: "CEP é obrigatório" }),
  address: z
    .string()
    .refine((value) => value.length > 0, { message: "Endereço é obrigatório" }),
  city: z
    .string()
    .refine((value) => value.length > 0, { message: "Cidade é obrigatória" }),
  complement: z.string(),
  number: z
    .string()
    .refine((value) => /^\d+$/.test(value), {
      message: "Número deve conter apenas números",
    })
    .refine((value) => value.length > 0, { message: "Número é obrigatório" }),
});

interface UpdateAddressDrawerProps {
  children: React.ReactNode;
}

interface FormValues {
  cep: string;
  address: string;
  city: string;
  complement: string;
  number: string;
}

export function UpdateAddressDrawer({ children }: UpdateAddressDrawerProps) {
  const [loading, setLoading] = useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const queryClient = useQueryClient();

  const { mutateAsync: updateProfile, isLoading } = useMutation({
    mutationFn: updateProfileAddress,
  });

  const { handleSubmit, register, setValue } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const { cep, address, city, complement, number } = data;

    try {
      await updateProfile({
        cep: cep,
        address: address,
        city: city,
        complement: complement,
        number: number,
      });

      queryClient.invalidateQueries("get-user-details")
    } catch (error) {
      alert('Falha em recuperar dados de usuário.')
    }
  };

  const handleCEPChange = async (cep: string) => {
    if (cep.length === 8 && /^\d+$/.test(cep)) {
      setLoading(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          setValue("address", data.logradouro + `, ${data.bairro}` || "");
          setValue("city", data.localidade || "");
          setShowAdditionalFields(true);
          document.getElementById("address")?.focus();
        }
      } catch (error) {
        console.error("Error fetching CEP data", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Definir endereço de entrega</DrawerTitle>
          <DrawerDescription>
            Preencha abaixo o seu endereço de entrega
          </DrawerDescription>
        </DrawerHeader>
        <form
          className="flex flex-col gap-3 p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            placeholder="CEP"
            {...register("cep")}
            maxLength={8}
            minLength={8}
            onBlur={(e) => handleCEPChange(e.target.value)}
          />
          {showAdditionalFields && (
            <>
              <Input
                type="text"
                placeholder="Endereço"
                {...register("address")}
              />
              <Input type="text" placeholder="Cidade" {...register("city")} />
              <Input
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
              <Input
                type="text"
                placeholder="Número"
                minLength={1}
                maxLength={4}
                {...register("number")}
              />
            </>
          )}
          <DrawerFooter>
            <Button type="submit" disabled={loading || isLoading}>
              {loading ? "Carregando..." : "Salvar"}
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
