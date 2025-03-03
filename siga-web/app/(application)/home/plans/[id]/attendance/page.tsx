"use client";

import TitleBar from "@/components/Siga/TitleBar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/config/axiosInstance";
import ClassAttendance from "@/types/ClassAttendance";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const HomePlansAttendancePage = () => {
  const { id } = useParams<{ id: string }>();

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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAttendanceClick = (studentId: number, time: string) => {
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
                  <TableCell className="w-[500px]">{student.name}</TableCell>
                  {student.attendances.map((attendance) => (
                    <TableCell
                      key={`${student.id}-${attendance.time}`}
                      className="text-center"
                    >
                      <Checkbox
                        checked={attendance.is_present}
                        onCheckedChange={() =>
                          handleAttendanceClick(student.id, attendance.time)
                        }
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex">
            <Button onClick={() => console.log(data)}>
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
