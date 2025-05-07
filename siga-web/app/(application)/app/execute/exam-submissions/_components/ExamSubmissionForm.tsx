"use client";

import {
  fetchExamSubmissions,
  storeExamSubmission,
} from "@/app/actions/examsActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IExamSubmissionResponse } from "@/types/ClassExam";
import { calculateFormula } from "@/utils/formula";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ExamSubmissionForm = () => {
  const [data, setData] = useState<IExamSubmissionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await fetchExamSubmissions();

      if (!result.success) {
        toast.error(result.error);
      }

      setData(result.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleBlur = (studentId: number, examId: number, value: string) => {
    if (!data) return;

    const newPivot = data.pivot.map((std) => {
      if (std.id !== studentId) return std;

      const updatedSubmissions = std.submissions.map((sub) => {
        if (sub.exam_id !== examId) return sub;

        const parsedValue = value.replace(",", ".");
        return {
          ...sub,
          submission: parsedValue !== "" ? parseFloat(parsedValue) : null,
        };
      });

      return {
        ...std,
        submissions: updatedSubmissions,
        computed_grade: calculateFormula(updatedSubmissions, data.formula),
      };
    });

    setData((prev) => (prev ? { ...prev, pivot: newPivot } : null));
  };

  const handleSubmit = async () => {
    if (!data) return;

    const payload = data.pivot.map((student) => {
      return {
        student_id: student.id,
        computed_grade: student.computed_grade,
        class_id: student.class_id,
        submissions: student.submissions.map((submission) => {
          return {
            exam_id: submission.exam_id,
            submission: submission.submission,
            grade: submission.submission,
          };
        }),
      };
    });

    const result = await storeExamSubmission(payload);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    toast.success("Notas enviadas com sucesso!");
  };

  return (
    <div className="space-y-4 px-4">
      {isLoading || !data ? (
        <div>Carregando...</div>
      ) : (
        <>
          <p>{`Fórmula utilizada para o cálculo: ${data.formula}`}</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <div className="flex items-center space-x-2">
                    <span>Aluno</span>
                  </div>
                </TableHead>
                {data.pivot[0].submissions.map((submission) => (
                  <TableHead key={submission.exam_id} className="text-center">
                    {submission.abbreviation}
                  </TableHead>
                ))}
                <TableHead>Média</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.pivot.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  {student.submissions.map((submission) => (
                    <TableCell key={submission.exam_id} className="text-center">
                      <Input
                        placeholder="0,00"
                        defaultValue={
                          submission.submission !== null
                            ? submission.submission.toString().replace(".", ",")
                            : "0"
                        }
                        onBlur={(e) =>
                          handleBlur(
                            student.id,
                            submission.exam_id,
                            e.target.value,
                          )
                        }
                      />
                    </TableCell>
                  ))}
                  <TableCell>{student.computed_grade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Button type="button" onClick={() => handleSubmit()}>
            Enviar notas
          </Button>
        </>
      )}
    </div>
  );
};

export default ExamSubmissionForm;
