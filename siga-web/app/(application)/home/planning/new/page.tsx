"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ROUTES } from "@/config/routes";
import { useRouter } from "next/navigation";

const HomePlanningPage = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(ROUTES.PLANNING.LIST);
  };

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Criar Novo Planejamento</h1>

      <form action="post" className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label>Título da Aula</Label>
          <Input placeholder="Título da Aula" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Descrição da Aula</Label>
          <Textarea placeholder="Descrição da Aula" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Data Planejada</Label>
          <Input type="date" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Data Aplicada</Label>
          <Input type="date" />
        </div>
      </form>

      <Button onClick={handleSubmit}>Salvar</Button>
    </div>
  );
};

export default HomePlanningPage;
