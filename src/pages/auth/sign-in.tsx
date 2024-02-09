import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";

export function SignIn() {
  return (
    <>
      <section className="flex w-full items-center justify-center">
        <img src="/acrepan-auth.png" alt="website Logo" className="max-w-80" />
      </section>
      <div className="mt-10">
        <p className="font-medium text-md">Faça login</p>
        <form className="flex flex-col mt-3 gap-4">
          <Input placeholder="E-mail" type="email" className="text-md h-10"/>
          <Input placeholder="Senha" type="password" className="text-md h-10" />
          <Button size="lg" className="uppercase">
            Entrar
          </Button>
        </form>
        <Separator className="my-4" />
      </div>
      <div className="flex mt-3 items-center justify-center">
        <span className=" text-gray-400 text-md">Não possui uma conta?</span>
      </div>
    </>
  );
}
