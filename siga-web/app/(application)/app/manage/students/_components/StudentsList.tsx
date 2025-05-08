"use client";

import { fetchStudents } from "@/app/actions/studentsAction";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IStudentResponse } from "@/types/Student";
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

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <span className="mb-4 block text-sm text-gray-500">
        {`${data.length} ${data.length === 1 ? "aluno" : "alunos"}`}
      </span>

      <div className="px-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Aluno</TableHead>
              <TableHead>Média</TableHead>
              <TableHead>Presença</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((stud) => (
              <TableRow key={stud.id}>
                <TableCell>{stud.full_name}</TableCell>
                <TableCell>{stud.computed_grade}</TableCell>
                <TableCell>50 %</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default StudentsList;
