import db from "../config/database";

class ClassesPlanningServices {
  getClassesPlanning = async (classId: number) => {
    const result = await db.class_planning.findMany({
      select: {
        id: true,
        planned_date: true,
        applied_date: true,
        class: true,
        title: true,
        description: true,
      },
      where: {
        class_id: classId,
      },
      orderBy: {
        applied_date: "asc",
      },
    });

    return result;
  };

  storeClassPlanning = async (body: any) => {
    const result = await db.class_planning.create({
      data: {
        class_id: body.class_id,
        title: body.title,
        description: body.description ? body.description : "",
        planned_date: new Date(body.planned_date),
        applied_date: body.applied_date ? new Date(body.applied_date) : null,
      },
    });

    return result;
  };
}

export default new ClassesPlanningServices();
