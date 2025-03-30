"use client";

import { storeExam, updateExam } from "@/app/actions/examsActions";
import InputWrapper from "@/components/SiGA/InputWrapper";
import RowWrapper from "@/components/SiGA/RowWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
        <InputWrapper className="md:w-8/12">
          <Label>Título</Label>
          <Input
            name="title"
            type="text"
            placeholder="Título"
            defaultValue={initialData?.title}
            required
          />
        </InputWrapper>

        <InputWrapper className="md:w-4/12">
          <Label>Título</Label>
          <Input
            name="abbreviation"
            type="text"
            placeholder="Abreviado"
            defaultValue={initialData?.abbreviation}
            required
          />
        </InputWrapper>
      </RowWrapper>

      <RowWrapper className="md:flex">
        <InputWrapper className="flex-auto">
          <Label>Data Planejada</Label>
          <Input
            name="planned_date"
            type="date"
            defaultValue={formatDate(initialData?.planned_date, "input")}
            required
          />
        </InputWrapper>

        <InputWrapper className="flex-auto">
          <Label>Data Aplicada</Label>
          <Input
            name="applied_date"
            type="date"
            defaultValue={formatDate(initialData?.applied_date, "input")}
            disabled
          />
        </InputWrapper>
      </RowWrapper>

      <Button type="submit">Salvar</Button>
    </form>
  );
};

export default ExamsCreateUpdateForm;
