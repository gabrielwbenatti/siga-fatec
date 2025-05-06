"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ClassesResponse } from "@/types/Class";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import { fetchClasses, setClassId } from "@/app/actions/authActions";
import { toast } from "sonner";

const ClassSelectionForm: FC = () => {
  const router = useRouter();

  const [selectedClass, setSelectedClass] = useState("");
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [loadingSubmmit, setLoadingSubmmit] = useState(false);
  const [data, setData] = useState<ClassesResponse[]>([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoadingData(true);
      const result = await fetchClasses();

      if (!result.success) {
        toast.error(result.error);
      }

      setData(result.data);
      setIsLoadingData(false);
    }

    fetchData();
  }, [router]);

  async function handleSelectClass(classId: string) {
    setLoadingSubmmit(true);
    await setClassId(classId);
    router.push(ROUTES.HOME);
  }

  return (
    <Card className="mx-auto w-full max-w-sm">
      {isLoadingData ? (
        <CardContent>
          <span>Carregando...</span>
        </CardContent>
      ) : (
        <>
          <CardHeader>
            <CardDescription>
              Selecione a turma abaixo para prosseguir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup>
              {data?.map((e) => (
                <div
                  key={e.id}
                  className="flex items-center gap-2 py-1.5"
                  onClick={() => setSelectedClass(String(e.id))}
                >
                  <RadioGroupItem
                    id={e.id.toString()}
                    value={e.id.toString()}
                  />
                  <Label
                    htmlFor={e.id.toString()}
                  >{`${e.discipline.abbreviation} - ${e.discipline.name}`}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={() => handleSelectClass(selectedClass)}>
              {loadingSubmmit ? "Registrando..." : "Continuar"}
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default ClassSelectionForm;
