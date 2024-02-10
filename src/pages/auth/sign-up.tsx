import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "@/lib/validations";
import { ToastAction } from "@/components/ui/toast";
import { Separator } from "@/components/ui/separator";

import { useMutation } from "react-query";
import { signUp } from "@/api/sign-up";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(5),
  phone: z.string().refine((value) => isValidPhoneNumber(value), {
    message: "Insira um celular válido.",
  }),
  password: z.string().min(5),
});

export function SignUp() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { mutateAsync: signup } = useMutation({
    mutationFn: signUp,
  });

  const onSubmit = async (data: any) => {
    const { email, name, password, phone } = data;

    try {
      await signup({ email, name, phone, password });
      navigate("/home");
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Falha ao registrar.",
        action: (
          <ToastAction altText="Tentar novamente">Tentar novamente</ToastAction>
        ),
      });
    }
  };

  return (
    <>
      <section className="flex w-full items-center justify-center">
        <img src="/acrepan-auth.png" alt="website Logo" className="max-w-80" />
      </section>
      <div className="mt-10">
        <p className="font-medium text-md">Faça seu cadastro</p>
        <form
          className="flex flex-col mt-3 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input placeholder="Apelido" type="text" {...register("name")} />
          <Input placeholder="E-mail" type="email" {...register("email")} />

          <Input placeholder="Telefone" type="tel" {...register("phone")} />
          <Input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <div className="flex items-center">
            <Checkbox id="termos-de-uso" />
            <label htmlFor="termos-de-uso" className="text-sm font-regular p-3">
              Ao se cadastrar na pão pão, você concorda com os termos de uso do
              aplicativo.
            </label>
          </div>
          <Button
            size="lg"
            className="uppercase"
            type="submit"
            disabled={isSubmitting}
          >
            Entrar
          </Button>
        </form>
        <Separator className="my-4" />
      </div>
      <div className="flex mt-3 items-center justify-center">
        <Link to="/sign-in" className=" text-gray-500 text-md">
          Já possui uma conta?
        </Link>
      </div>
    </>
  );
}
