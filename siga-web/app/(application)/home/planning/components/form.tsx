import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import api from "@/config/axiosInstance";
import ClassPlan from "@/types/ClassPlan";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";

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
    class_id: 2,
    title: "",
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Criar Novo Planejamento</h1>

      <form
        onSubmit={handleSubmit}
        action="post"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <Label>Título da Aula</Label>
          <Input
            placeholder="Título da Aula"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Descrição da Aula</Label>
          <Textarea
            placeholder="Descrição da Aula"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Data Planejada</Label>
          <Input type="date" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Data Aplicada</Label>
          <Input type="date" />
        </div>

        <div className="flex">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </div>
  );
};

export default HomePlansForm;
