import db from "../config/database";

class ClassesPlansServices {
  getClassesPlans = async (classId: number) => {
    const result = await db.class_plans.findMany({
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

  storeClassPlans = async (body: any) => {
    const result = await db.class_plans.create({
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

  showClassPlans = async (plansId: number) => {
    const result = await db.class_plans.findFirst({
      where: { id: plansId },
    });

    return result;
  };

  updateClassPlaning = async (body: any) => {
    const result = await db.class_plans.update({
      data: {
        class_id: body.class_id,
        title: body.title,
        description: body.description ? body.description : "",
        planned_date: new Date(body.planned_date),
        applied_date: body.applied_date ? new Date(body.applied_date) : null,
      },
      where: {
        id: body.id,
      },
    });

    return result;
  };
}

export default new ClassesPlansServices();
