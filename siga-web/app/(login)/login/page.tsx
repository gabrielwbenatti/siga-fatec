"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/config/axiosInstance";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" },
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await api.post("/auth/login", formData);
      toast.success("ok");
      // const res = await api.post("/auth/login", formData);
      // if (res.status === 200) {
      //   cookiesStore.set("session", res.data.token);
      // }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <Card className="mx-auto w-full max-w-sm">
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
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
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
