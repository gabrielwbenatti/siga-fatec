"use client";

import InputWrapper from "@/components/Siga/InputWrapper";
import TitleBar from "@/components/Siga/TitleBar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassAttendance, { Attendance } from "@/types/ClassAttendance";
import { formatDate } from "@/utils/string_helper";
import { Label } from "@radix-ui/react-label";
import { SquareCheck, SquareMinus, SquareX } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const HomePlansAttendancePage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [data, setData] = useState<ClassAttendance | undefined>(undefined);
  const [classAtt, setClassAtt] = useState<ClassAttendance | undefined>(
    undefined,
  );
  const [editing, setEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      fetchAttendances(Number(id));
    }
  }, []);

  const fetchAttendances = async (planId: number) => {
    try {
      setLoading(true);
      const res = await api.get<ClassAttendance>(
        `/classes/plans/${planId}/attendances`,
      );
      setData(res.data);
      setClassAtt(res.data);
      console.log(res.data);
      setEditing(!!res.data.plan.applied_date);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleIndividualAttendanceClick = (studentId: number, time: string) => {
    setData((prev) =>
      prev
        ? {
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
          }
        : undefined,
    );
  };
  const handleAllAttendanceClick = (
    studentId: number,
    currentValue: boolean,
  ) => {
    setData((prev) =>
      prev
        ? {
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
          }
        : undefined,
    );
  };

  const getIconType = (attendances: Array<Attendance>) => {
    if (attendances.every((a) => a.is_present)) {
      return <SquareCheck />; //<ClipboardCheck />;
    }
    if (attendances.every((a) => !a.is_present)) {
      return <SquareX />; //<ClipboardX />;
    }
    return <SquareMinus />; // <ClipboardMinus />;
  };

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="space-y-4 p-4">
      {classAtt && (
        <>
          <TitleBar title={classAtt.plan.title} />
          <p className="line-clamp-1 text-sm">{classAtt.plan.description}</p>
        </>
      )}
      {data && data.schedules.length > 0 && data.students.length > 0 ? (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead />
                <TableHead>Aluno</TableHead>
                {data.schedules.map((schedule) => (
                  <TableHead
                    key={schedule.start_time}
                    className="text-center"
                  >{`${schedule.start_time} - ${schedule.end_time}`}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.students.map((student) => (
                <TableRow key={`${student.id}`}>
                  <TableCell>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        handleAllAttendanceClick(
                          student.id,
                          student.attendances[0].is_present,
                        )
                      }
                    >
                      {getIconType(student.attendances)}
                    </Button>
                  </TableCell>
                  <TableCell className="w-[500px]">{student.name}</TableCell>
                  {student.attendances.map((attendance) => (
                    <TableCell
                      key={`${student.id}-${attendance.time}`}
                      className="text-center"
                    >
                      <Checkbox
                        checked={attendance.is_present}
                        onCheckedChange={() =>
                          handleIndividualAttendanceClick(
                            student.id,
                            attendance.time,
                          )
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
                setData((prev) =>
                  prev
                    ? {
                        ...prev,
                        plan: { ...prev.plan, info_for_absent: e.target.value },
                      }
                    : undefined,
                )
              }
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Data de realização</Label>
            <Input
              type="date"
              value={formatDate(data.plan.applied_date, "input") || ""}
              onChange={(e) =>
                setData((prev) =>
                  prev
                    ? {
                        ...prev,
                        plan: { ...prev.plan, applied_date: e.target.value },
                      }
                    : undefined,
                )
              }
            />
          </InputWrapper>

          <div className="flex">
            <Button
              onClick={async () => {
                try {
                  if (editing) {
                    await api.put(`/classes/plans/${id}/attendances`, data);
                  } else {
                    await api.post(`/classes/plans/${id}/attendances`, data);
                  }

                  toast.success("Presenças registradas com sucesso");
                  router.push(ROUTES.PLANS.LIST);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Gravar Frequências
            </Button>
          </div>
        </>
      ) : (
        <div>Nenhuma informação a ser exibida.</div>
      )}
    </div>
  );
};

export default HomePlansAttendancePage;
