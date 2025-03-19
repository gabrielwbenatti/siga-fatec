"use client";

import { storeExam, updateExam } from "@/app/actions/examsActions";
import InputWrapper from "@/components/SiGA/InputWrapper";
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
    const data = Object.fromEntries(formData.entries()) as unknown as Exam;

    const result = !!initialData
      ? await updateExam(data)
      : await storeExam(data);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    router.push(ROUTES.EXAMS.LIST);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-4">
      <InputWrapper>
        <Label>Título</Label>
        <Input
          name="title"
          type="text"
          placeholder="Título"
          defaultValue={initialData?.title}
          required
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Data Planejada</Label>
        <Input
          name="planned_date"
          type="date"
          defaultValue={formatDate(initialData?.planned_date, "input")}
          required
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Peso na média</Label>
        <Input
          name="weight"
          type="number"
          defaultValue={initialData?.weight}
          required
        />
      </InputWrapper>

      <Button type="submit">Salvar</Button>
    </form>
  );
};

export default ExamsCreateUpdateForm;
