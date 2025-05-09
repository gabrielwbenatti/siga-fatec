"use client";

import { fetchStudents } from "@/app/actions/studentsAction";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IStudentResponse } from "@/types/Student";
import { MailIcon } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { toast } from "sonner";

const StudentsList: FC = () => {
  const [data, setData] = useState<IStudentResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await fetchStudents();

      if (!result.success) {
        toast.error(result.error);
      }

      setData(result.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const computedGradeBadge = (computedGrade: number) => {
    const color =
      computedGrade < 6
        ? "bg-red-600"
        : computedGrade >= 6 && computedGrade < 8
          ? "bg-yellow-600"
          : "bg-green-600";

    return <Badge className={color}>{computedGrade}</Badge>;
  };

  const frequencyBadge = (frequency: number) => {
    const color =
      frequency < 75
        ? "bg-red-600"
        : frequency >= 75 && frequency < 80
          ? "bg-yellow-600"
          : "bg-green-600";

    return <Badge className={color}>{`${frequency} %`}</Badge>;
  };

  if (isLoading) {
    return <div className="px-4">Carregando...</div>;
  }

  return (
    <>
      <span className="mb-4 block px-4 text-sm text-gray-500">
        {`${data.length} ${data.length === 1 ? "aluno" : "alunos"}`}
      </span>

      <div className="px-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Aluno</TableHead>
              <TableHead className="text-center">Média</TableHead>
              <TableHead className="text-center">Freqência</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((stud) => (
              <TableRow key={stud.id}>
                <TableCell>{stud.full_name}</TableCell>
                <TableCell className="text-center">
                  {computedGradeBadge(stud.computed_grade)}
                </TableCell>
                <TableCell className="text-center">
                  {frequencyBadge(stud.frequency)}
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <a href={`mailto:${stud.email}`}>
                      <Button size="icon" variant="outline">
                        <MailIcon />
                      </Button>
                    </a>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default StudentsList;
