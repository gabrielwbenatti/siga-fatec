import db from "../config/database";

class ClassesAttendanceService {
  getPlansAttendances = async (classId: number, planId: number) => {
    const plan = await db.class_plans.findFirst({
      select: { id: true, title: true, description: true },
      where: { class_id: classId, id: planId },
    });
    const schedule = await db.class_schedules.findMany({
      select: { id: true, start_time: true, end_time: true },
      where: { class_id: classId },
      orderBy: { start_time: "asc" },
    });
    const students = await db.students.findMany({
      where: { class_students: { some: { class_id: classId } } },
      include: { plans_attendance: { include: { class_schedule: true } } },
    });

    const pivot = students.map((stud) => {
      const result = {
        name: `${stud.first_name} ${stud.last_name}`,
        id: stud.id,
        attendances: schedule.map((sched) => ({
          isPresent:
            stud.plans_attendance.some(
              (p) => p.class_schedule_id === sched.id
            ) || true,
          student_id: stud.id,
          time: sched.start_time,
        })),
      };
      return result;
    });

    return { plan, schedule, students: pivot };
  };
}

export default new ClassesAttendanceService();
