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
        finished: false,
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

  getClassById = async (classId: number) => {
    const result = await db.classes.findUnique({
      where: {
        id: classId,
      },
    });

    return result;
  };

  setFormula = async (body: any, classId: number) => {
    const { formula } = body;

    const row = await db.classes.update({
      data: {
        evaluation_formula: formula,
      },
      where: {
        id: classId,
      },
    });

    return row;
  };

  getFinishedClasses = async (teacherId: number) => {
    const result = await db.classes.findMany({
      select: {
        id: true,
        discipline: true,
        semester: true,
        year: true,
      },
      where: {
        teacher_id: teacherId,
        finished: true,
      },
      orderBy: [{ year: "desc" }, { semester: "desc" }],
    });

    return result;
  };
}

export default new ClassesServices();
