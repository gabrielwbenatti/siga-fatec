import db from "../config/database";
import { TeacherDashboard } from "../types/responses/TeacherDashboard";

class TeachersService {
  dashboardInfo = async (
    teacherId: number,
    classId: number
  ): Promise<TeacherDashboard> => {
    const teacher = await db.teachers.findUnique({
      where: { id: teacherId },
      include: { user: true },
    });

    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const upcomingClasses = await db.class_plans.findMany({
      where: {
        class: { teacher_id: teacherId },
        planned_date: {
          gte: today,
          lte: nextWeek,
        },
        applied_date: null,
      },
      include: { class: { include: { discipline: true } } },
      orderBy: { planned_date: "asc" },
      take: 5,
    });

    const classStats = await db.classes.findMany({
      where: { teacher_id: teacherId, year: today.getFullYear() },
      include: {
        discipline: { include: { course: true } },
        class_students: true,
      },
    });

    const processedClassStats = classStats.map((cls) => ({
      id: cls.id,
      discipline: cls.discipline,
      semester: cls.semester,
      year: cls.year,
      studentCount: cls.class_students.length,
    }));
    const currentDiscipline = await db.classes.findFirst({
      select: { discipline: { select: { abbreviation: true, name: true } } },
      where: { id: classId },
    });

    const result = {
      upcomingClasses: upcomingClasses,
      classStats: processedClassStats,
      currentUser: {
        first_name: teacher?.first_name ?? "",
        last_name: teacher?.last_name ?? "",
        id: teacher?.id ?? 0,
        class_id: classId,
        discipline: currentDiscipline?.discipline,
      },
    };

    return result;
  };

  createTeacher = async (body: any) => {
    const result = await db.teachers.create({
      data: {
        user_id: body.user_id,
        teach_since: body.teach_since || undefined,
        document: body.document,
        first_name: body.first_name,
        last_name: body.last_name,
      },
    });

    return result;
  };

  async showTeacher(teacherId: number) {
    const row = await db.teachers.findFirst({ where: { id: teacherId } });

    return row;
  }
}

export default new TeachersService();
