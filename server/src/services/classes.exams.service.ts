import db from "../config/database";

class ClassesExamsService {
  index = async (classId: number) => {
    const rows = await db.exams.findMany({
      where: { class_id: classId },
    });

    return rows;
  };

  store = async (body: any, classId: number) => {
    const { planned_date, title, applied_date, description, weight } = body;
    const row = await db.exams.create({
      data: {
        class_id: classId,
        planned_date: new Date(planned_date),
        title,
        applied_date: applied_date ? new Date(applied_date) : null,
        description,
        weight,
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

  update = async (body: any, classId: number) => {
    const { id, planned_date, title, applied_date, description, weight } = body;
    const row = await db.exams.update({
      data: {
        class_id: classId,
        planned_date: new Date(planned_date),
        title,
        applied_date: applied_date ? new Date(applied_date) : null,
        description,
        weight,
      },
      where: { id, class_id: classId },
    });

    return row;
  };
}

export default new ClassesExamsService();
