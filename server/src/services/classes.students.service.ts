import db from "../config/database";

class ClassesStudentsServices {
  getClassesStudents = async (classId: number) => {
    const result = await db.class_students.findMany({
      include: { student: true },
      where: { class_id: classId },
    });

    return result;
  };
}

export default new ClassesStudentsServices();
