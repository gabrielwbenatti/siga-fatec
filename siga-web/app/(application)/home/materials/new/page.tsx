"use client";

import InputWrapper from "@/components/Siga/InputWrapper";
import TitleBar from "@/components/Siga/TitleBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassMaterial from "@/types/ClassMaterial";
import { extractFileExtension } from "@/utils/file_helper";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const HomeMaterialsNewPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ClassMaterial>({
    class_id: 2,
    title: "",
    list_index: 0,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await api.post("/classes/materials", formData);

    if (res.status === 201) {
      router.push(ROUTES.MATERIALS.LIST);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const extension = extractFileExtension(file.name);
    setFormData((prev) => ({
      ...prev,
      title:
        prev.title ||
        file.name.substring(0, file.name.length - (extension.length + 1)),
      file_format: extension,
    }));
  };

  return (
    <div className="space-y-4 p-4">
      <TitleBar title="Novo Material de Aula" />

      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <InputWrapper>
          <Input
            placeholder="Selecione o arquivo desejado"
            type="file"
            onChange={handleFileSelect}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Título do arquivo</Label>
          <Input
            placeholder="Título do arquivo"
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Descrição do conteúdo</Label>
          <Textarea
            placeholder="Ex.: material teórico para..."
            value={formData.description || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </InputWrapper>

        <div className="flex">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </div>
  );
};

export default HomeMaterialsNewPage;
