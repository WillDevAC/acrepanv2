import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";

export function SignIn() {
  return (
    <>
      <section className="flex w-full items-center justify-center">
        <img src="/acrepan-auth.png" alt="website Logo" className="max-w-72" />
      </section>
      <div className="mt-10">
        <p className="font-medium">Faça login</p>
        <form className="flex flex-col mt-3 gap-4">
          <Input placeholder="E-mail" type="email" />
          <Input placeholder="Senha" type="password" />
          <Button size="lg" className="uppercase">
            Entrar
          </Button>
        </form>
        <Separator className="my-4" />
      </div>
      <div className="flex mt-3 items-center justify-center">
        <span className="text-sm text-gray-400">Não possui uma conta?</span>
      </div>
    </>
  );
}
