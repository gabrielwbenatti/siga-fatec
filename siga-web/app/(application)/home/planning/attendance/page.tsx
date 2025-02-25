"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface DataDTO {
  schedule: {
    id: number;
    class_id: number;
    day_of_week: number;
    start_time: string;
    end_time: string;
  }[];
  students: {
    student: { name: string; id: number };
    attendances: { isPresent: boolean; student_id: number; time: string }[];
  }[];
}

const HomePlanningAttendancePage = () => {
  const [data, setData] = useState({
    schedule: [
      {
        id: 5,
        class_id: 2,
        day_of_week: 2,
        start_time: "19:00",
        end_time: "19:50",
      },
      {
        id: 6,
        class_id: 2,
        day_of_week: 2,
        start_time: "19:50",
        end_time: "20:40",
      },
      {
        id: 7,
        class_id: 2,
        day_of_week: 2,
        start_time: "20:50",
        end_time: "21:40",
      },
      {
        id: 8,
        class_id: 2,
        day_of_week: 2,
        start_time: "21:40",
        end_time: "22:30",
      },
    ],
    students: [
      {
        student: {
          name: "Aluno 123",
          id: 2,
        },
        attendances: [
          {
            isPresent: false,
            student_id: 2,
            time: "19:00",
          },
          {
            isPresent: false,
            student_id: 2,
            time: "19:50",
          },
          {
            isPresent: false,
            student_id: 2,
            time: "20:50",
          },
          {
            isPresent: false,
            student_id: 2,
            time: "21:40",
          },
        ],
      },
      {
        student: {
          name: "Aluno 234",
          id: 1,
        },
        attendances: [
          {
            isPresent: false,
            student_id: 1,
            time: "19:00",
          },
          {
            isPresent: false,
            student_id: 1,
            time: "19:50",
          },
          {
            isPresent: false,
            student_id: 1,
            time: "20:50",
          },
          {
            isPresent: false,
            student_id: 1,
            time: "21:40",
          },
        ],
      },
    ],
  });

  const handleAttendanceChange = (studentId: number, time: string) => {
    setData((prevData) => ({
      ...prevData,
      students: prevData.students.map((studentData) => {
        if (studentData.student.id === studentId) {
          return {
            ...studentData,
            attendances: studentData.attendances.map((attendance) => {
              if (attendance.time === time) {
                return {
                  ...attendance,
                  isPresent: !attendance.isPresent,
                };
              }
              return attendance;
            }),
          };
        }
        return studentData;
      }),
    }));
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Registrar Presenças</h1>
      </div>

      <table className="flex flex-col divide-y">
        <thead>
          <tr>
            <th>Aluno</th>
            {data.schedule.map((e, i) => (
              <th key={i}>{`${e.start_time}-${e.end_time}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.students.map((studentData) => (
            <tr key={studentData.student.id}>
              <td>{studentData.student.name}</td>

              {studentData.attendances.map((attendance, i) => (
                <td key={i}>
                  <Checkbox
                    checked={attendance.isPresent}
                    onCheckedChange={() =>
                      handleAttendanceChange(
                        studentData.student.id,
                        attendance.time,
                      )
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePlanningAttendancePage;
