import db from "../config/database";

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

    const computedGrade = await db.class_students.findMany({
      select: {
        student_id: true,
        computed_grade: true,
      },
      where: {
        class_id: classId,
      },
    });

    const processedResult = students.map((stud) => ({
      id: stud.id,
      full_name: [stud.first_name, stud.last_name].join(" "),
      phone1: stud.phone1,
      phone2: stud.phone2,
      computed_grade:
        computedGrade.find((comp) => comp.student_id === stud.id) ?? 0,
    }));

    return processedResult;
  };
}

export default new ClassesStudentsServices();
