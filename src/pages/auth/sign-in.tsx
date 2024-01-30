import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/api/sign-in";

import { ToastAction } from "@radix-ui/react-toast";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "react-query";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export function SignIn() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  const onSubmit = async (data: any) => {
    const { email, password } = data;

    try {
      await authenticate({ email, password });
      navigate('/home');
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Senha incorreta.",
        action: (
          <ToastAction altText="Tentar novamente">Tentar novamente</ToastAction>
        ),
      });
    }
  };

  return (
    <>
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/sign-up">Não tenho cadastro</Link>
      </Button>

      <div className="flex w-full flex-col max-w-80 justify-center gap-6">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" {...register("email")} />
            {errors.email && (
              <p className="text-red-400">Preecha um email válido.</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && (
              <p className="text-red-400">Preencha uma senha válida.</p>
            )}
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Fazer login
          </Button>
        </form>
      </div>
    </>
  );
}
