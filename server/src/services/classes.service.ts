import db from "../config/database";

class ClassesServices {
  getClasses = async (teacherId: number) => {
    const result = await db.classes.findMany({
      select: {
        id: true,
        discipline: true,
        semester: true,
        year: true,
      },
      where: {
        teacher_id: teacherId,
      },
    });

    return result;
  };

  createClass = async (body: any) => {
    const result = await db.classes.create({
      data: {
        teacher_id: body.teacher_id,
        discipline_id: body.discipline_id,
        semester: body.semester,
        year: body.year,
      },
    });

    return result;
  };
}

export default new ClassesServices();
