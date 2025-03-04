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

interface HomeMaterialsFormProps {
  isEditMode: boolean;
}

const HomeMaterialsForm: FC<HomeMaterialsFormProps> = ({
  isEditMode = true,
}: HomeMaterialsFormProps) => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(isEditMode);
  const [error, setError] = useState<string | null>(null);

  const [material, setMaterial] = useState<ClassMaterial | null>(null);
  const [formData, setFormData] = useState<ClassMaterial>({
    class_id: 2,
    title: "",
  });

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
      setFormData(res.data);
      setError(null);
    } catch (error) {
      setError("Erro ao carregar material. Tente novamente");
      console.log(error);
    } finally {
      setLoading(false);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (isEditMode) {
        await api.put(`/classes/materials/${id}`, formData);
      } else {
        await api.post("/classes/materials", formData);
      }

      router.push(ROUTES.MATERIALS.LIST);
      toast.info("Material cadastrado com sucesso");
    } catch (error) {
      toast.error("Erro ao salvar o material. Tente novamente.");
      console.log(error);
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

      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <InputWrapper>
          <Input
            placeholder="Selecione o arquivo desejado"
            type="file"
            required
            disabled={isEditMode}
            onChange={handleFileSelect}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Título do arquivo</Label>
          <Input
            placeholder="Título do arquivo"
            type="text"
            required
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

export default HomeMaterialsForm;
