"use client";

import { createClassPlan } from "@/app/actions/classPlansActions";
import TitleBar from "@/components/Siga/TitleBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ROUTES } from "@/config/routes";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const PlansForm = ({ isEditMode }: Readonly<{ isEditMode: boolean }>) => {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = await createClassPlan(formData);

    if (result.success) {
      router.push(ROUTES.PLANS.LIST);
    }
  }

  return (
    <div className="space-y-4 p-4">
      <TitleBar title={isEditMode ? "" : "Criar Novo Planejamento"} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label>Título da Aula</Label>
          <Input placeholder="Título da Aula" name="title" required />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Descrição da Aula</Label>
          <Textarea
            placeholder="Descrição da Aula"
            rows={6}
            name="description"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Data Planejada</Label>
          <Input type="date" name="planned_date" required />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Data Aplicada</Label>
          <Input type="date" name="applied_date" />
        </div>

        <div className="flex">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </div>
  );
};

export default PlansForm;
