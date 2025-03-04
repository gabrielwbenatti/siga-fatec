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
import { ROUTES } from "@/config/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ClassDTO {
  id: number;
  discipline: {
    id: number;
    name: string;
    abbreviation: string;
    course_id: number;
  };
  semester: number;
  year: number;
}

const ClassSelectionPage = () => {
  const router = useRouter();

  const [selected, setSelected] = useState<ClassDTO | null>(null);
  const data: ClassDTO[] = [
    {
      id: 1,
      discipline: {
        id: 1,
        name: "Programação Web",
        abbreviation: "pweb",
        course_id: 1,
      },
      semester: 1,
      year: 2025,
    },
    {
      id: 2,
      discipline: {
        id: 2,
        name: "Engenharia de Software",
        abbreviation: "engsoft",
        course_id: 1,
      },
      semester: 1,
      year: 2025,
    },
  ];

  const handleSelectItem = (e: ClassDTO) => {
    if (e != selected) {
      setSelected(e);
    }
  };

  const handleSubmit = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardDescription>
          Selecione a turma abaixo para prosseguir
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue={selected?.toString()}>
          {data?.map((e) => (
            <div
              onClick={() => handleSelectItem(e)}
              key={e.id}
              className="flex items-center gap-2 py-1.5"
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
        <Button onClick={handleSubmit} disabled={selected === undefined}>
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClassSelectionPage;
