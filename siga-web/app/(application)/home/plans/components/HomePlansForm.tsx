import TitleBar from "@/components/Siga/TitleBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassPlan from "@/types/ClassPlan";
import { formatDate } from "@/utils/string_helper";
import { useParams, useRouter } from "next/navigation";
import { FC, FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

interface HomePlansFormProps {
  isEditMode: boolean;
}

const HomePlansForm: FC<HomePlansFormProps> = ({
  isEditMode,
}: HomePlansFormProps) => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(isEditMode);
  const [error, setError] = useState<string | null>(null);

  const [plan, setPlan] = useState<ClassPlan | null>(null);
  const [formData, setFormData] = useState<ClassPlan>({
    title: "",
    planned_date: "",
  });

  useEffect(() => {
    if (isEditMode && id) {
      fetchPlan(+id);
    }
  }, [isEditMode, id]);

  const fetchPlan = async (id: number) => {
    try {
      setLoading(true);
      const res = await api.get(`/classes/plans/${id}`);
      setFormData(res.data);
      setPlan(res.data);
      setError(null);
    } catch (error) {
      setError("Erro ao carregar planejamento. Tente novamente");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log(error);

      if (isEditMode) {
        await api.put(`/classes/plans/${id}`, formData);
      } else {
        await api.post("/classes/plans", formData);
      }

      router.push(ROUTES.PLANS.LIST);
      toast.info("Planejamento criado com sucesso");
    } catch (error) {
      toast.error("Erro ao salvar o planejamento. Tente novamente.");
      console.log(error);
    }
  };

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="space-y-4 p-4">
      <TitleBar
        title={isEditMode ? `${plan?.title}` : "Criar Novo Planejamento"}
      />

      <form
        onSubmit={handleSubmit}
        action="post"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <Label>Título da Aula</Label>
          <Input
            placeholder="Título da Aula"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Descrição da Aula</Label>
          <Textarea
            placeholder="Descrição da Aula"
            rows={6}
            value={formData.description || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Data Planejada</Label>
          <Input
            type="date"
            value={formatDate(formData.planned_date, "input") || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, planned_date: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Data Aplicada</Label>
          <Input
            type="date"
            value={formatDate(formData.applied_date, "input") || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, applied_date: e.target.value }))
            }
          />
        </div>

        <div className="flex">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </div>
  );
};

export default HomePlansForm;
