"use client";

import { storeExam, updateExam } from "@/app/actions/examsActions";
import { Input } from "@/components/SiGA/Input";
import RowWrapper from "@/components/SiGA/RowWrapper";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import Exam from "@/types/Exam";
import { formatDate } from "@/utils/string_helper";
import { useRouter } from "next/navigation";
import { FC, FormEvent } from "react";
import { toast } from "sonner";

interface ExamsCreateUpdateFormProps {
  initialData?: Exam;
}

const ExamsCreateUpdateForm: FC<ExamsCreateUpdateFormProps> = ({
  initialData,
}: ExamsCreateUpdateFormProps) => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(
      formData.entries(),
    ) as unknown as Exam;

    const data = {
      ...initialData,
      ...formValues,
    };

    const result = !!initialData
      ? await updateExam(data)
      : await storeExam(data);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    router.push(ROUTES.PLANNING.EXAMS.LIST);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-4">
      <RowWrapper>
        <Input.Root className="md:w-8/12">
          <Input.Label>Título</Input.Label>
          <Input.Content
            name="title"
            type="text"
            placeholder="Título"
            defaultValue={initialData?.title}
            required
          />
        </Input.Root>

        <Input.Root className="md:w-4/12">
          <Input.Label tooltip="Utilizado na fórmula (ex: P1, T)">
            Sigla
          </Input.Label>
          <Input.Content
            name="abbreviation"
            type="text"
            placeholder="Abreviado"
            defaultValue={initialData?.abbreviation}
            required
          />
        </Input.Root>
      </RowWrapper>

      <RowWrapper className="md:flex">
        <Input.Root className="flex-auto">
          <Input.Label>Data Planejada</Input.Label>
          <Input.Content
            name="planned_date"
            type="date"
            defaultValue={formatDate(initialData?.planned_date, "input")}
            required
          />
        </Input.Root>

        <Input.Root className="flex-auto">
          <Input.Label>Data Aplicada</Input.Label>
          <Input.Content
            name="applied_date"
            type="date"
            defaultValue={formatDate(initialData?.applied_date, "input")}
            disabled
          />
        </Input.Root>
      </RowWrapper>

      <Button type="submit">Salvar</Button>
    </form>
  );
};

export default ExamsCreateUpdateForm;
