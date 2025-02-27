import db from "../config/database";

class ClassesPlansServices {
  getClassesPlans = async (classId: number) => {
    const rows = await db.class_plans.findMany({
      select: {
        id: true,
        planned_date: true,
        applied_date: true,
        title: true,
        description: true,
      },
      where: {
        class_id: classId,
      },
      orderBy: {
        planned_date: "asc",
      },
    });

    if (!rows) {
      return null;
    }

    return rows.map((e) => ({
      ...e,
      planned_date: e.planned_date
        ? e.planned_date.toISOString().split("T")[0]
        : null,
      applied_date: e.applied_date
        ? e.applied_date.toISOString().split("T")[0]
        : null,
    }));
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
    const rows = await db.class_plans.findFirst({
      where: { id: plansId },
    });

    if (!rows) {
      return null;
    }

    return {
      ...rows,
      planned_date: rows.planned_date
        ? rows.planned_date.toISOString().split("T")[0]
        : null,
      applied_date: rows.applied_date
        ? rows.applied_date.toISOString().split("T")[0]
        : null,
    };
  };

  updateClassPlaning = async (classId: number, body: any) => {
    const { class_id, title, description, planned_date, applied_date } = body;

    const result = await db.class_plans.update({
      data: {
        class_id,
        title,
        description,
        planned_date: planned_date ? new Date(planned_date) : undefined,
        applied_date: applied_date ? new Date(applied_date) : undefined,
      },
      where: {
        id: body.id,
        class_id: classId,
      },
    });

    if (!result) {
      return null;
    }

    return result;
  };

  async deleteClassPlan(id: number, classId: number) {
    const row = await db.class_plans.delete({
      where: { id: id, class_id: classId },
    });

    if (!row) {
      return null;
    }

    return row;
  }
}

export default new ClassesPlansServices();
