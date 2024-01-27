import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignUp() {
  return (
    <>
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/sign-in">Fazer login</Link>
      </Button>

      <div className="flex w-full max-w-80 flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-sm text-muted-foreground">
            Tenha os melhores pães agora mesmo!
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome: </Label>
            <Input id="managerName" type="text" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail: </Label>
            <Input id="email" type="email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu celular: </Label>
            <Input id="phone" type="tel" />
          </div>

          <Button className="w-full" type="submit">
            Finalizar cadastro
          </Button>

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Desenvolvido por
            <a href="#" className="underline pl-1 underline-offset-4">
              JB MIDIA
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
