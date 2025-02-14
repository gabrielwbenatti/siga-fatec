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
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the form from submitting

    await auth.signIn({ email, password }).then(() => {
      if (auth.teacher !== null) {
        router.push(ROUTES.CLASS_SELECTION);
      }
    });
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
        <form onSubmit={handleSubmit} method="post">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Acessar</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
