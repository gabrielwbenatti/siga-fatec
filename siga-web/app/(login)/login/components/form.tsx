"use client";

import { FormEvent, useState } from "react";
import { ROUTES } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { logIn } from "@/app/actions/authActions";
import { toast } from "sonner";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const result = await logIn(formData);

    setIsLoading(false);

    if (result.success) {
      router.push(ROUTES.CLASS_SELECTION);
    } else {
      toast.error(result.error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" placeholder="E-mail" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            {isLoading ? "Acessando..." : "Acessar"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
