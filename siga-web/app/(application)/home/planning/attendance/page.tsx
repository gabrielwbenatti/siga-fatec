const HomePlanningAttendancePage = () => {
  const data = {
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
        studentName: { name: "Matheus Figueiredo", id: 2 },
        attendances: [true, true, true, true],
      },
      {
        studentName: { name: "Gabriel Benatti", id: 1 },
        attendances: [true, true, true, true],
      },
    ],
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Registrar Presenças</h1>
      </div>

      <table className="flex flex-col divide-y">
        <th>
          <td>Aluno</td>
          {data.schedule.map((e, i) => (
            <td key={i}>{`${e.start_time}-${e.end_time}`}</td>
          ))}
        </th>
        <tbody>
          {data.students.map((student, i) => (
            <tr key={i}>
              <td>{student.studentName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePlanningAttendancePage;
