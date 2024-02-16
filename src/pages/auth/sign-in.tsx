import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/api/sign-in";
import { ToastAction } from "@radix-ui/react-toast";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";

import { z } from "zod";
import { ThreeDots } from "react-loader-spinner";

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
    formState: { isSubmitting },
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
      navigate("/home");
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
      <section className="flex w-full items-center justify-center">
        <img src="/acrepan-auth.png" alt="website Logo" className="max-w-80" />
      </section>
      <div className="mt-10">
        <p className="font-medium text-md">Faça login</p>
        <form
          className="flex flex-col mt-3 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input placeholder="E-mail" type="email" {...register("email")} />
          <Input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <Button
            size="lg"
            className="uppercase"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && <ThreeDots color="white" width={45} height={45} />}

            {!isSubmitting && "Entrar"}
          </Button>
        </form>
        <Separator className="my-4" />
      </div>
      <div className="flex mt-3 items-center justify-center">
        <Link to="/sign-up" className=" text-gray-500 text-md">
          Não possui uma conta?
        </Link>
      </div>
    </>
  );
}
