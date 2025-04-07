"use client";

import {
  storeBibliography,
  updateBibliography,
} from "@/app/actions/bibliographyActions";
import InputWrapper from "@/components/SiGA/InputWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/lib/routes";
import ClassBibliography from "@/types/ClassBibliography";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, FormEvent } from "react";
import { toast } from "sonner";

interface Props {
  initialData?: ClassBibliography;
}

const BibliographyCreateUpdateForm: FC<Props> = ({ initialData }: Props) => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(
      formData.entries(),
    ) as unknown as ClassBibliography;

    const data = {
      ...initialData,
      ...formValues,
    };

    const result = !!initialData
      ? await updateBibliography(data)
      : await storeBibliography(data);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    router.push(ROUTES.PLANNING.BIBLIOGRAPHY.LIST);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 space-y-4 px-4"
    >
      <InputWrapper>
        <Label>Referência</Label>
        <Input
          type="text"
          defaultValue={initialData?.reference}
          name="reference"
          placeholder="Referência"
        />
      </InputWrapper>

      <div className="flex">
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
};

export default BibliographyCreateUpdateForm;
