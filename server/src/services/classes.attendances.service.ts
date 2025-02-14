import db from "../config/database";

class ClassesAttendanceService {
  getPlansAttendances = async (classId: number) => {
    const schedule = await db.class_schedules.findMany({
      where: { class_id: classId },
      orderBy: { start_time: "asc" },
    });
    const students = await db.students.findMany({
      where: { class_students: { every: { class_id: classId } } },
      include: { planning_attendance: { include: { class_schedule: true } } },
    });

    const pivot = students.map((stud) => {
      const result = {
        studentName: `${stud.first_name} ${stud.last_name}`,
        attendances: schedule.map(
          (sched) =>
            stud.planning_attendance.some(
              (p) => p.class_schedule_id === sched.id
            ) || true
        ),
      };
      return result;
    });

    return pivot;
  };
}

export default new ClassesAttendanceService();
