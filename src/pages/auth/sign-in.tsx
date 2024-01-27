import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignIn() {
  return (
    <>
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/sign-up">Não tenho cadastro</Link>
      </Button>

      <div className="flex w-full flex-col max-w-80 justify-center gap-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email: </Label>
            <Input id="email" type="text" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha: </Label>
            <Input id="password" type="password" />
          </div>

          <Button className="w-full" type="submit">
            Fazer login
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
