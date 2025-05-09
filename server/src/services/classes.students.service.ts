import db from "../config/database";
import { calculateFrequency } from "./functions";

class ClassesStudentsServices {
  getClassesStudents = async (classId: number) => {
    const students = await db.students.findMany({
      include: {
        user: {
          select: { email: true },
        },
      },
      where: {
        class_students: {
          some: {
            class_id: classId,
          },
        },
      },
    });
    const computedGrades = await db.class_students.findMany({
      select: {
        student_id: true,
        computed_grade: true,
      },
      where: {
        class_id: classId,
      },
    });

    const presences: { studentId: number; frequency: number }[] = [];
    for (const stud of students) {
      const frequency = await calculateFrequency(stud.id, classId);
      presences.push({ studentId: stud.id, frequency: frequency.frequency });
    }

    const processedResult = students.map((stud) => ({
      id: stud.id,
      full_name: [stud.first_name, stud.last_name].join(" "),
      phone1: stud.phone1,
      phone2: stud.phone2,
      email: stud.user.email,
      computed_grade:
        computedGrades.find((comp) => comp.student_id === stud.id)
          ?.computed_grade ?? 0,
      frequency:
        presences.find((pres) => pres.studentId === stud.id)?.frequency ?? 0,
    }));

    return processedResult;
  };
}

export default new ClassesStudentsServices();
