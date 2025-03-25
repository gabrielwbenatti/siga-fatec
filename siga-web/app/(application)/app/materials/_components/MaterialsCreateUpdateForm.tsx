"use client";

import { store, update } from "@/app/actions/materialsActions";
import InputWrapper from "@/components/SiGA/InputWrapper";
import RowWrapper from "@/components/SiGA/RowWrapper";
import { Titlebar } from "@/components/SiGA/Titlebar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ROUTES } from "@/lib/routes";
import ClassMaterial from "@/types/ClassMaterial";
import { extractFileExtension } from "@/utils/file_helper";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

interface MaterialsCreateUpdateFormProps {
  initialData?: ClassMaterial;
}

const MaterialsCreateUpdateForm: FC<MaterialsCreateUpdateFormProps> = ({
  initialData,
}: MaterialsCreateUpdateFormProps) => {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title || "");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      const fileExtension = extractFileExtension(fileName);
      const fileWithoutExtension = fileName.substring(
        0,
        fileName.length - (fileExtension.length + 1),
      );

      setTitle(fileWithoutExtension);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    const file = formData.get("file") as File;
    const is_active = formData.get("is_active") === "on";

    const data = {
      ...initialData,
      ...formValues,
      file_format: !!initialData
        ? initialData.file_format
        : extractFileExtension(file.name),
      is_active,
      title,
    } as unknown as ClassMaterial;

    const result = !!initialData ? await update(data) : await store(data);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    router.push(ROUTES.MATERIALS.LIST);
  };

  return (
    <div className="space-y-4">
      <Titlebar.Root>
        <Titlebar.Title
          title={
            !!initialData ? `${initialData?.title}` : "Novo Material de Aula"
          }
        />
      </Titlebar.Root>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4">
        {!initialData && (
          <InputWrapper>
            <Input
              placeholder="Selecione o arquivo desejado"
              type="file"
              name="file"
              required
              onChange={handleFileChange}
              disabled={!!initialData}
            />
          </InputWrapper>
        )}

        <InputWrapper>
          <Label>Título do arquivo</Label>
          <Input
            placeholder="Título do arquivo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            defaultValue={initialData?.description}
          />
        </InputWrapper>

        <RowWrapper>
          <Checkbox
            id="is_active"
            name="is_active"
            defaultChecked={initialData?.is_active || true}
          />
          <Label htmlFor="is_active">Disponível para os alunos</Label>
        </RowWrapper>

        <div className="flex">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </div>
  );
};

export default MaterialsCreateUpdateForm;
