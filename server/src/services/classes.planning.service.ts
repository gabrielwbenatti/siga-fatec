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
}

export default new ClassesPlanningServices();
