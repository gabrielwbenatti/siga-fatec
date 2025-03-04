import db from "../config/database";

interface IClassAttendance {
  plan: {
    id: number;
    title: string;
    description: string;
    planned_date: string;
    applied_date: string;
    info_for_absent: string;
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
        is_present: boolean;
        student_id: number;
        time: string;
        schedule_id: number;
      }
    ];
  }[];
}

class ClassesAttendanceService {
  async getPlansAttendances(classId: number, planId: number) {
    const plan = await db.class_plans.findFirst({
      select: {
        id: true,
        title: true,
        description: true,
        planned_date: true,
        applied_date: true,
        info_for_absent: true,
      },
      where: { class_id: classId, id: planId },
    });
    const schedules = await db.class_schedules.findMany({
      select: { id: true, start_time: true, end_time: true },
      where: { class_id: classId },
      orderBy: { start_time: "asc" },
    });
    const students = await db.students.findMany({
      where: { class_students: { some: { class_id: classId } } },
      include: {
        plans_attendance: {
          include: { class_plan: true, class_schedule: true },
          where: { class_id: classId, class_plan_id: planId },
        },
      },
    });

    const pivot = students.flatMap((stud) => ({
      id: stud.id,
      name: `${stud.first_name} ${stud.last_name}`,
      attendances:
        stud.plans_attendance.length > 0
          ? stud.plans_attendance.map((plan) => ({
              is_present: plan.is_present,
              time: plan.class_schedule.start_time,
              schedule_id: plan.class_schedule_id,
            }))
          : schedules.flatMap((sched) => ({
              is_present: true,
              time: sched.start_time,
              schedule_id: sched.id,
            })),
    }));

    return { plan, schedules, students: pivot };
  }

  async storePlanAttendances(classId: number, planId: number, body: any) {
    try {
      const { plan, students }: IClassAttendance = body;

      const attendancesTx = students.flatMap((std) =>
        std.attendances.map((att) =>
          db.plans_attendances.create({
            data: {
              class_id: classId,
              class_schedule_id: att.schedule_id,
              class_plan_id: planId,
              student_id: std.id,
              is_present: att.is_present,
            },
          })
        )
      );
      const { applied_date } = plan;
      const classPlanTx = db.class_plans.update({
        data: {
          applied_date: applied_date ? new Date(applied_date) : undefined,
          info_for_absent: plan.info_for_absent,
        },
        where: { class_id: classId, id: plan.id },
      });

      const result = await db.$transaction([...attendancesTx, classPlanTx]);

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ClassesAttendanceService();
