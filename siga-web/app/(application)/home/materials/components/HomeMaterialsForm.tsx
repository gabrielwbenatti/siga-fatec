"use client";

import { createClassMaterial } from "@/app/actions/materialsActions";
import InputWrapper from "@/components/Siga/InputWrapper";
import TitleBar from "@/components/Siga/TitleBar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassMaterial from "@/types/ClassMaterial";
import { extractFileExtension } from "@/utils/file_helper";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

export default function HomeMaterialsForm({
  isEditMode = true,
  initialData = undefined,
}: {
  isEditMode: boolean;
  initialData?: ClassMaterial;
}) {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(isEditMode);
  const [error, setError] = useState<string | null>(null);

  const [material, setMaterial] = useState<ClassMaterial | null>(null);

  useEffect(() => {
    if (isEditMode && id) {
      fetchMaterial(+id);
    }
  }, [isEditMode, id]);

  const fetchMaterial = async (id: number) => {
    try {
      setLoading(true);
      const res = await api.get(`/classes/materials/${id}`);
      setMaterial(res.data);
      setError(null);
    } catch (error) {
      setError("Erro ao carregar material. Tente novamente");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = await createClassMaterial(formData);

    if (result.success) {
      router.push(ROUTES.MATERIALS.LIST);
    }
  };

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="space-y-4 p-4">
      <TitleBar
        title={isEditMode ? `${material?.title}` : "Novo Material de Aula"}
      />

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputWrapper>
          <Input
            placeholder="Selecione o arquivo desejado"
            type="file"
            name="file"
            required
            disabled={isEditMode}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Título do arquivo</Label>
          <Input
            placeholder="Título do arquivo"
            defaultValue={initialData?.title}
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

        <div className="flex">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </div>
  );
}
