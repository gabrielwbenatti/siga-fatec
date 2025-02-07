"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/config/routes";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(ROUTES.CLASS_SELECTION);
  };

  return (
    <Card className="md:max-w-[500px]">
      <CardHeader>
        <CardTitle>SIGA Fatec</CardTitle>
        <CardDescription>
          Informe seu e-mail institucional para prosseguir.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action="" method="post">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="E-mail" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="Senha" />{" "}
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit} type="submit">
          Acessar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
