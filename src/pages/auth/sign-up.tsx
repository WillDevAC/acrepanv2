import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isValidPhoneNumber } from "@/lib/validations";

import { z } from "zod";
import { useMutation } from "react-query";
import { signUp } from "@/api/sign-up";
import { ToastAction } from "@/components/ui/toast";

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
    formState: { errors, isSubmitting },
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
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/sign-in">Fazer login</Link>
      </Button>

      <div className="flex w-full max-w-80 flex-col justify-center gap-6">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" type="text" {...register("name")} />
            {errors.name && (
              <p className="text-red-400">Insira um nome válido.</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-red-400">Insira um email válido.</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Celular</Label>
            <Input
              placeholder="(99) 99999-9999"
              type="tel"
              minLength={1}
              maxLength={11}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-400">Insira um celular válido.</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && (
              <p className="text-red-400">Insira uma senha válida.</p>
            )}
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Finalizar cadastro
          </Button>
        </form>
      </div>
    </>
  );
}
