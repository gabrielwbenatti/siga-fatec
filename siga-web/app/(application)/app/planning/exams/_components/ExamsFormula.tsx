"use client";

import { getClassById } from "@/app/actions/authActions";
import { updateFormula } from "@/app/actions/examsActions";
import RowWrapper from "@/components/SiGA/RowWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Class from "@/types/Class";
import { PencilIcon, SaveIcon, XIcon } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { toast } from "sonner";

interface Props {
  initialData?: Class;
}

const ExamsFormula: FC<Props> = ({ initialData }: Props) => {
  const [data, setData] = useState<Class | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formula, setFormula] = useState<string>(
    initialData?.evaluation_formula || "",
  );

  useEffect(() => {
    async function fetchData() {
      if (!initialData) return;
      const result = await getClassById();

      if (result) {
        setData(result);
      }
    }

    fetchData();
  }, [initialData]);

  const handleSave = async () => {
    if (!initialData?.id) return;

    const id = initialData.id;
    const result = await updateFormula(String(id), formula);

    if (result.success) {
      toast.success("Fórmula salva com sucesso!");
    }
    if (result.error) {
      toast.error(result.error);
    }
    setIsEditing(false);
  };

  return (
    <div className="px-4">
      <Card className="mb-4 w-full">
        <CardHeader>
          <CardTitle>{`Fórmula de Avaliação ${data?.year}-${data?.semester}`}</CardTitle>
        </CardHeader>
        <CardContent>
          <RowWrapper>
            <Input
              type="text"
              autoComplete="off"
              defaultValue={data?.evaluation_formula}
              disabled={!isEditing}
              onChange={(e) => setFormula(e.target.value)}
              placeholder={
                isEditing ? "Ex.: ((P1+P2+P3)/3)+T" : "Nenhuma fórmula definida"
              }
            />

            <RowWrapper>
              {isEditing ? (
                <>
                  <Button onClick={handleSave}>
                    <SaveIcon /> Salvar
                  </Button>
                  <Button onClick={() => setIsEditing(false)} variant="outline">
                    <XIcon /> Cancelar
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => setIsEditing(true)}>
                    <PencilIcon /> Editar
                  </Button>
                </>
              )}
            </RowWrapper>
          </RowWrapper>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExamsFormula;
