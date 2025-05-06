"use client";

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
import { useState } from "react";

interface Props {
  initialData: {
    id: number;
    name: string;
    computed_grade: number;
    submissions: {
      exam_id: number;
      abbreviation: string;
      submission: number | null;
    }[];
  }[];
}

const ExamSubmissionForm = ({ initialData }: Props) => {
  const [data, setData] = useState(initialData);

  const calculateFormula = (
    submissions: {
      exam_id: number;
      abbreviation: string;
      submission: number | null;
    }[],
    formula: string,
  ) => {
    const values: Record<string, number> = {};
    for (const submission of submissions) {
      values[submission.abbreviation] = submission.submission || 0;
    }

    let expression = formula;
    for (const [abbr, value] of Object.entries(values)) {
      expression = expression.replace(
        new RegExp(`\\b${abbr}\\b`, "g"),
        value.toString(),
      );
    }

    try {
      return Math.round(eval(expression) * 100) / 100;
    } catch (err) {
      console.error("Erro ao calcular fórmula:", err);
      return 0;
    }
  };

  const handleInputChange = (
    studentId: number,
    examId: number,
    value: string,
  ) => {
    const parsedValue = value.replace(",", ".");

    const newData = data.map((std) => {
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
        computed_grade: calculateFormula(
          updatedSubmissions,
          "(P1 + P2 + P3) / 3",
        ),
      };
    });

    setData(newData);
  };

  const handleSubmit = () => {
    console.log("Dados enviados:", data);
  };

  return (
    <div className="space-y-4 px-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center space-x-2">
                <span>Aluno</span>
              </div>
            </TableHead>
            {data[0].submissions.map((submission) => (
              <TableHead key={submission.exam_id} className="text-center">
                {submission.abbreviation}
              </TableHead>
            ))}
            <TableHead>Média</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              {student.submissions.map((submission) => (
                <TableCell key={submission.exam_id} className="text-center">
                  <Input
                    placeholder="0,00"
                    defaultValue={
                      submission.submission !== null
                        ? submission.submission.toString().replace(".", ",")
                        : ""
                    }
                    onBlur={(e) =>
                      handleInputChange(
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
    </div>
  );
};

export default ExamSubmissionForm;
