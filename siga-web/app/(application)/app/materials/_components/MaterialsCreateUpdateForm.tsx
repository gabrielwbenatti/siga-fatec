"use client";

import {
  createClassMaterial,
  updateClassMaterial,
} from "@/app/actions/materialsActions";
import InputWrapper from "@/components/SiGA/InputWrapper";
import { Titlebar } from "@/components/SiGA/Titlebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ROUTES } from "@/lib/routes";
import ClassMaterial from "@/types/ClassMaterial";
import { extractFileExtension } from "@/utils/file_helper";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useState } from "react";

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
    formData.set("title", title);

    if (!!initialData) {
      await updateClassMaterial(initialData.id!, formData);
    } else {
      await createClassMaterial(formData);
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
        <InputWrapper>
          <Input
            placeholder="Selecione o arquivo desejado"
            type="file"
            name="file"
            required
            defaultValue={initialData?.title || ""}
            onChange={handleFileChange}
            disabled={!!initialData}
          />
        </InputWrapper>

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
            defaultValue={initialData?.description || ""}
          />
        </InputWrapper>

        <div className="flex">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </div>
  );
};

export default MaterialsCreateUpdateForm;
