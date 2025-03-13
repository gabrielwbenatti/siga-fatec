"use client";

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
import ClassAttendance, { Attendance } from "@/types/ClassAttendance";
import { formatDate } from "@/utils/string_helper";
import { SquareCheck, SquareMinus, SquareX } from "lucide-react";
import { useState } from "react";

export default function AttendanceList({
  initialData,
}: {
  initialData: ClassAttendance;
}) {
  const [data, setData] = useState(initialData);
  // const [editing, setEditing] = useState<boolean>(false);
  // const [loading, setLoading] = useState(false);

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
      return <SquareCheck />;
    }
    if (attendances.every((a) => !a.is_present)) {
      return <SquareX />;
    }
    return <SquareMinus />;
  };

  return (
    <div className="flex flex-col space-y-4">
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
        <Button>Gravar Frequências</Button>
      </div>
    </div>
  );
}

// onClick={async () => {
//   try {
//     if (editing) {
//       const res = await api.put(
//         `/classes/plans/${id}/attendances`,
//         data,
//       );
//       if (res.status !== 200) {
//       }
//       toast.success("Presenças atualizadas com sucesso");
//     } else {
//       const res = await api.post(
//         `/classes/plans/${id}/attendances`,
//         data,
//       );
//       if (res.status !== 201) {
//       }
//       toast.success("Presenças registradas com sucesso");
//     }

//     router.push(ROUTES.PLANS.LIST);
//   } catch (error) {
//     console.log(error);
//   }
// }}
