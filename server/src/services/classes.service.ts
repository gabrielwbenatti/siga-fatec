import db from "../config/database";

class ClassesServices {
  getClasses = async (teacherId: number) => {
    const result = await db.classes.findMany({
      select: {
        id: true,
        discipline: true,
        semestrer: true,
        year: true,
      },
      where: {
        teacher_id: teacherId,
      },
    });

    return result;
  };
}

export default new ClassesServices();
