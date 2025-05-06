"use client";

import { storeExamSubmission } from "@/app/actions/examsActions";
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
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  initialData: IExamSubmissionResponse;
}

const ExamSubmissionForm = ({ initialData }: Props) => {
  const [data, setData] = useState(initialData);

  const handleBlur = (studentId: number, examId: number, value: string) => {
    const parsedValue = value.replace(",", ".");

    const newPivot = data.pivot.map((std) => {
      if (std.id !== studentId) return std;

      const updatedSubmissions = std.submissions.map((sub) => {
        if (sub.exam_id !== examId) return sub;

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

    setData((prev) => ({ ...prev, pivot: newPivot }));
  };

  const handleSubmit = async () => {
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
                      handleBlur(student.id, submission.exam_id, e.target.value)
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
    </div>
  );
};

export default ExamSubmissionForm;
