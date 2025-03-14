"use client";

import {
  createClassMaterial,
  updateClassMaterial,
} from "@/app/actions/materialsActions";
import InputWrapper from "@/components/SiGA/InputWrapper";
import TitleBar from "@/components/SiGA/TitleBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ROUTES } from "@/lib/routes";
import ClassMaterial from "@/types/ClassMaterial";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function HomeMaterialsForm({
  isEditMode = true,
  initialData = undefined,
}: {
  isEditMode: boolean;
  initialData?: ClassMaterial;
}) {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (isEditMode) {
      if (!initialData) return;
      await updateClassMaterial(initialData.id!, formData);
    } else {
      await createClassMaterial(formData);
    }
    router.push(ROUTES.MATERIALS.LIST);
  };

  return (
    <div className="space-y-4">
      <TitleBar
        title={isEditMode ? `${initialData?.title}` : "Novo Material de Aula"}
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputWrapper>
          <Input
            placeholder="Selecione o arquivo desejado"
            type="file"
            name="file"
            required
            defaultValue={initialData?.title || ""}
            disabled={isEditMode}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Título do arquivo</Label>
          <Input
            placeholder="Título do arquivo"
            defaultValue={initialData?.title || ""}
            type="text"
            required
            name="title"
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Descrição do conteúdo</Label>
          <Textarea
            placeholder="Ex.: material teórico para..."
            name="description"
            defaultValue={initialData?.description || ""}
          />
        </InputWrapper>

        <div className="flex">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </div>
  );
}
