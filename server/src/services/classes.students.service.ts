import db from "../config/database";

class ClassesStudentsServices {
  getClassesStudents = async (classId: number) => {
    const students = await db.students.findMany({
      include: {
        user: {
          select: { email: true },
        },
        class_students: {
          select: { computed_grade: true },
          where: { class_id: classId },
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

    return students;
  };
}

export default new ClassesStudentsServices();
