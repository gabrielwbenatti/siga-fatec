import db from "../config/database";

class ClassesAttendanceService {
  getPlansAttendances = async (classId: number) => {
    const schedule = await db.class_schedules.findMany({
      where: { class_id: classId },
      orderBy: { start_time: "asc" },
    });
    const students = await db.students.findMany({
      where: { class_students: { every: { class_id: classId } } },
      include: { plans_attendance: { include: { class_schedule: true } } },
    });

    const pivot = students.map((stud) => {
      const result = {
        student: { name: `${stud.first_name} ${stud.last_name}`, id: stud.id },
        attendances: schedule.map((sched) => ({
          isPresent: stud.plans_attendance.some(
            (p) => p.class_schedule_id === sched.id
          ),
          student_id: stud.id,
          time: sched.start_time,
        })),
      };
      return result;
    });

    return { schedule: schedule, students: pivot };
  };
}

export default new ClassesAttendanceService();
