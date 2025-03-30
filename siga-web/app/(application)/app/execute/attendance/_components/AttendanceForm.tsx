"use client";

import { postAttendances, updateAttendances } from "@/app/actions/plansActions";
import InputWrapper from "@/components/SiGA/InputWrapper";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ROUTES } from "@/lib/routes";
import ClassAttendance, { Attendance } from "@/types/ClassAttendance";
import { formatDate } from "@/utils/string_helper";
import { SquareCheck, SquareMinus, SquareX } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function AttendanceForm({
  initialData,
}: {
  initialData: ClassAttendance;
}) {
  const [data, setData] = useState(initialData);
  const isEditMode = !!initialData.plan.applied_date;
  const router = useRouter();

  const handleIndividualAttendanceClick = (studentId: number, time: string) => {
    setData((prev) => ({
      ...prev,
      students: prev.students.map((std) => {
        if (std.id === studentId) {
          return {
            ...std,
            attendances: std.attendances.map((att) => {
              if (att.time === time) {
                return { ...att, is_present: !att.is_present };
              }
              return att;
            }),
          };
        }
        return std;
      }),
    }));
  };

  const handleAllAttendanceClick = (
    studentId: number,
    currentValue: boolean,
  ) => {
    setData((prev) => ({
      ...prev,
      students: prev.students.map((e) => {
        if (e.id === studentId) {
          return {
            ...e,
            attendances: e.attendances.map((a) => {
              return {
                ...a,
                is_present: !currentValue,
              };
            }),
          };
        }
        return e;
      }),
    }));
  };

  const getIconType = (attendances: Array<Attendance>) => {
    if (attendances.every((a) => a.is_present)) {
      return <SquareCheck className="bg-green-200" />;
    }
    if (attendances.every((a) => !a.is_present)) {
      return <SquareX className="bg-red-200" />;
    }
    return <SquareMinus />;
  };

  const handleSubmit = async () => {
    const result = isEditMode
      ? await updateAttendances(initialData.plan.id, data)
      : await postAttendances(initialData.plan.id, data);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    router.push(ROUTES.PLANNING.CLASSES.LIST);
  };

  return (
    <div className="flex flex-col space-y-4 px-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead />
            <TableHead className="text-left">Aluno</TableHead>
            {data.schedules.map((s) => (
              <TableCell
                key={s.id}
                className="text-center"
              >{`${s.start_time}-${s.end_time}`}</TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.students.map((s) => (
            <TableRow key={s.id}>
              <TableCell>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    handleAllAttendanceClick(s.id, s.attendances[0].is_present)
                  }
                >
                  {getIconType(s.attendances)}
                </Button>
              </TableCell>
              <TableCell className="text-left">{s.name}</TableCell>
              {s.attendances.map((a) => (
                <TableCell key={`${s.id}${a.time}`} className="text-center">
                  <Checkbox
                    checked={a.is_present}
                    onClick={() =>
                      handleIndividualAttendanceClick(s.id, a.time)
                    }
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <InputWrapper>
        <Label>Informações para alunos ausentes</Label>
        <Textarea
          placeholder="Ex.: conteúdo aplicado será utilizado em avaliações"
          value={data.plan.info_for_absent || ""}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              plan: { ...prev.plan, info_for_absent: e.target.value },
            }))
          }
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Conteúdo ministrado:</Label>
        <Textarea value={data.plan.description} disabled />
      </InputWrapper>

      <InputWrapper>
        <Label>Data de realização</Label>
        <Input
          type="date"
          value={formatDate(data.plan.applied_date, "input") || ""}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              plan: { ...prev.plan, applied_date: e.target.value },
            }))
          }
        />
      </InputWrapper>

      <div className="flex">
        <Button onClick={() => handleSubmit()}>Gravar Frequências</Button>
      </div>
    </div>
  );
}
