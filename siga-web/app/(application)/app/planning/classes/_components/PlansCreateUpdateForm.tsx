"use client";

import { createClassPlan, updateClassPlan } from "@/app/actions/plansActions";
import { Input } from "@/components/SiGA/Input";
import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
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

    router.push(ROUTES.PLANNING.CLASSES.LIST);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 space-y-4 px-4"
    >
      <Input.Root>
        <Input.Label>Título da Aula</Input.Label>
        <Input.Content
          placeholder="Título da Aula"
          name="title"
          required
          defaultValue={initialData?.title || ""}
        />
      </Input.Root>

      <Input.Root>
        <Input.Label>Descrição da Aula</Input.Label>
        <Input.Textarea
          placeholder="Descrição da Aula"
          rows={6}
          name="description"
          defaultValue={initialData?.description || ""}
        />
      </Input.Root>

      <div className="gap-2 md:flex">
        <Input.Root className="flex-auto">
          <Input.Label tooltip="Data pretendida para a aula">
            Data Planejada
          </Input.Label>
          <Input.Content
            type="date"
            name="planned_date"
            required
            defaultValue={initialData?.planned_date || ""}
          />
        </Input.Root>

        <Input.Root className="flex-auto">
          <Input.Label tooltip="Data em que a aula foi lecionada (chamada online)">
            Data Aplicada
          </Input.Label>
          <Input.Content
            type="date"
            name="applied_date"
            disabled
            defaultValue={initialData?.applied_date || ""}
          />
        </Input.Root>
      </div>

      <div className="flex">
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
};

export default PlansCreateUpdateForm;
