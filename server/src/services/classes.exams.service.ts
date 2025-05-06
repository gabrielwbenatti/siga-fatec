import { title } from "process";
import db from "../config/database";

class ClassesExamsService {
  index = async (classId: number) => {
    const rows = await db.exams.findMany({
      where: { class_id: classId },
      orderBy: { planned_date: "asc" },
    });

    return rows;
  };

  store = async (body: any, classId: number) => {
    const {
      planned_date,
      title,
      applied_date,
      description,
      weight,
      abbreviation,
    } = body;

    const row = await db.exams.create({
      data: {
        class_id: classId,
        planned_date: new Date(planned_date),
        title,
        applied_date: applied_date ? new Date(applied_date) : null,
        description,
        weight,
        abbreviation,
      },
    });

    return row;
  };

  show = async (id: number, classId: number) => {
    const row = await db.exams.findFirst({
      where: { id, class_id: classId },
    });

    return row;
  };

  update = async (body: any, examId: number, classId: number) => {
    const {
      planned_date,
      title,
      applied_date,
      description,
      weight,
      abbreviation,
    } = body;

    const row = await db.exams.update({
      data: {
        class_id: classId,
        planned_date: new Date(planned_date),
        title,
        applied_date: applied_date ? new Date(applied_date) : null,
        description,
        weight,
        abbreviation,
      },
      where: { id: examId, class_id: classId },
    });

    return row;
  };

  indexSubmissions = async (classId: number) => {
    const students = await db.students.findMany({
      select: {
        first_name: true,
        last_name: true,
        id: true,
        class_students: { select: { computed_grade: true, class_id: true } },
      },
      where: { class_students: { some: { class_id: classId } } },
    });
    const exams = await db.exams.findMany({
      select: {
        id: true,
        abbreviation: true,
        planned_date: true,
        applied_date: true,
      },
      where: { class_id: classId },
    });
    const submissions = await db.exam_submissions.findMany({
      select: { student_id: true, id: true, exam_id: true },
      where: {
        student: { class_students: { some: { class_id: classId } } },
      },
    });

    const pivot = students.map((stud) => {
      return {
        id: stud.id,
        name: `${stud.first_name} ${stud.last_name}`,
        computed_grade: stud.class_students[0].computed_grade,
        class_id: stud.class_students[0].class_id,
        submissions: exams.map((ex) => ({
          exam_id: ex.id,
          abbreviation: ex.abbreviation,
          submission:
            submissions.find(
              (sub) => sub.student_id === stud.id && sub.exam_id === ex.id
            ) ?? null,
        })),
      };
    });

    return [...pivot];
  };

  postSubmissions = async (
    body: {
      id: number;
      computed_grade: number;
      class_id: number;
      submissions: {
        exam_id: number;
        submission: number;
        grade: number;
      }[];
    }[],
    classId: number
  ) => {
    const allPromises: Promise<any>[] = [];

    for (const stud of body) {
      for (const sub of stud.submissions) {
        allPromises.push(
          db.exam_submissions.upsert({
            where: {
              exam_id_student_id: {
                exam_id: sub.exam_id,
                student_id: stud.id,
              },
            },
            create: {
              exam_id: sub.exam_id,
              student_id: stud.id,
              grade: sub.grade,
            },
            update: {
              exam_id: sub.exam_id,
              student_id: stud.id,
              grade: sub.grade,
            },
          })
        );
      }
    }

    await Promise.all(allPromises);
  };
}

export default new ClassesExamsService();
