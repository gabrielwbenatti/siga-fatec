"use client";

import { createClassPlan, updateClassPlan } from "@/app/actions/plansActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ROUTES } from "@/lib/routes";
import ClassPlan from "@/types/ClassPlan";
import { useRouter } from "next/navigation";
import { FC, FormEvent } from "react";

interface PlansCreateUpdateFormProps {
  initialData?: ClassPlan;
}

const PlansCreateUpdateForm: FC<PlansCreateUpdateFormProps> = ({
  initialData = undefined,
}: PlansCreateUpdateFormProps) => {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (!!initialData) {
      await updateClassPlan(initialData.id!, formData);
    } else {
      await createClassPlan(formData);
    }

    router.push(ROUTES.PLANS.LIST);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 space-y-4 px-4"
    >
      <div className="flex flex-col gap-1.5">
        <Label>Título da Aula</Label>
        <Input
          placeholder="Título da Aula"
          name="title"
          required
          defaultValue={initialData?.title || ""}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Descrição da Aula</Label>
        <Textarea
          placeholder="Descrição da Aula"
          rows={6}
          name="description"
          defaultValue={initialData?.description || ""}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Data Planejada</Label>
        <Input
          type="date"
          name="planned_date"
          required
          defaultValue={initialData?.planned_date || ""}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Data Aplicada</Label>
        <Input
          type="date"
          name="applied_date"
          defaultValue={initialData?.applied_date || ""}
        />
      </div>

      <div className="flex">
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
};

export default PlansCreateUpdateForm;
