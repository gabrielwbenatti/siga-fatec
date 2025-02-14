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
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  const auth = useAuth();

  const [selected, setSelected] = useState<ClassDTO | null>(null);
  const [data, setData] = useState<ClassDTO[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/classes", {
          headers: { "teacher-id": auth.teacher?.id },
        });

        if (res.status === 200) {
          console.log(res.data);
          setData(res.data);
        }
      } catch (error) {}
    };

    fetchData();
  }, []);

  const handleSelectItem = (e: ClassDTO) => {
    if (e != selected) {
      setSelected(e);
    }
  };

  const handleSubmit = () => {
    auth.setClass();
    router.push(ROUTES.HOME);
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
