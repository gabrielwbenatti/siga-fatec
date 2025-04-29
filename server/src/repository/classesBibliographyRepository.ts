import db from "../config/database";

export const classesBibliographyRepository = {
  getAll: async (classId: number) => {
    const rows = await db.class_bibliography.findMany({
      where: { class_id: classId },
      orderBy: { id: "asc" },
    });

    return rows;
  },

  create: async (classId: number, data: any) => {
    const row = await db.class_bibliography.create({
      data: {
        class_id: classId,
        ...data,
      },
    });
    return row;
  },

  getById: async (classId: number, id: number) => {
    const row = await db.class_bibliography.findFirst({
      where: { class_id: classId, id },
    });
    return row;
  },

  update: async (classId: number, id: number, data: any) => {
    const row = await db.class_bibliography.updateMany({
      where: { class_id: classId, id },
      data,
    });
    return row;
  },

  delete: async (classId: number, id: number) => {
    const row = await db.class_bibliography.delete({
      where: { class_id: classId, id },
    });
    return row;
  },
};
