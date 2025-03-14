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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import { setClassId } from "@/app/actions/authActions";

const ClassSelectionForm = ({
  data,
}: Readonly<{
  data: ClassesResponse[];
}>) => {
  const router = useRouter();
  const [selectedClass, setSelectedClass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSelectClass(classId: string) {
    setIsLoading(true);
    await setClassId(classId);
    setIsLoading(false);
    router.push(ROUTES.HOME);
  }

  return (
    <Card className="mx-auto w-full max-w-sm">
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
              <RadioGroupItem id={e.id.toString()} value={e.id.toString()} />
              <Label
                htmlFor={e.id.toString()}
              >{`${e.discipline.abbreviation} - ${e.discipline.name}`}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={() => handleSelectClass(selectedClass)}>
          {isLoading ? "Registrando..." : "Continuar"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClassSelectionForm;
