import db from "../config/database";

interface ResponseApi7 {
  plan: {
    id: number;
    title: string;
    description: string;
  };
  schedules: {
    id: number;
    start_time: string;
    end_time: string;
  }[];
  students: {
    name: string;
    id: number;
    attendances: [
      {
        isPresent: boolean;
        student_id: number;
        time: string;
        schedule_id: number;
      }
    ];
  }[];
}

class ClassesAttendanceService {
  getPlansAttendances = async (classId: number, planId: number) => {
    const plan = await db.class_plans.findFirst({
      select: { id: true, title: true, description: true },
      where: { class_id: classId, id: planId },
    });
    const schedules = await db.class_schedules.findMany({
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
        attendances: schedules.map((sched) => ({
          isPresent:
            stud.plans_attendance.some(
              (p) => p.class_schedule_id === sched.id
            ) || true,
          student_id: stud.id,
          time: sched.start_time,
          schedule_id: sched.id,
        })),
      };
      return result;
    });

    return { plan, schedules, students: pivot };
  };

  async storePlanAttendances(classId: number, planId: number, body: any) {
    try {
      const { students }: ResponseApi7 = body;

      const transactions = students.flatMap((std) =>
        std.attendances.map((att) =>
          db.plans_attendances.create({
            data: {
              class_id: classId,
              class_schedule_id: att.schedule_id,
              class_plan_id: planId,
              student_id: std.id,
              is_present: att.isPresent,
            },
          })
        )
      );

      const result = await db.$transaction(transactions);

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ClassesAttendanceService();
