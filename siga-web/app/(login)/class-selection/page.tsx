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
import { useRouter } from "next/navigation";
import { useState } from "react";

const ClassSelectionPage = () => {
  const data = [
    {
      id: 1,
      discipline: {
        id: 7,
        name: "Laboratório de Redes",
        abbreviation: "LR",
        course_id: 1,
      },
      semestrer: 1,
      year: 2025,
    },
    {
      id: 2,
      discipline: {
        id: 9,
        name: "Sociedade e Tecnollgia",
        abbreviation: "HST002",
        course_id: 1,
      },
      semestrer: 1,
      year: 2025,
    },
    {
      id: 3,
      discipline: {
        id: 10,
        name: "Metodologia da Pesquisa Científico-Tecnológica",
        abbreviation: "TTG001",
        course_id: 1,
      },
      semestrer: 1,
      year: 2025,
    },
  ];
  const router = useRouter();
  const [selected, setSelected] = useState<number | undefined>(undefined);

  const handleSelectItem = (index: number) => {
    if (index != selected) {
      setSelected(index);
      console.log(data[index]);
    }
  };

  const handleSubmit = () => {
    router.push("/home");
  };

  return (
    <Card className="md:max-w-[500px]">
      <CardHeader>
        <CardDescription>
          Selecione a turma abaixo para prosseguir
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue={selected?.toString()}>
          {data.map((e, i) => (
            <div
              onClick={() => handleSelectItem(i)}
              key={i}
              className="flex items-center gap-2 py-1.5"
            >
              <RadioGroupItem id={e.id.toString()} value={i.toString()} />
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
