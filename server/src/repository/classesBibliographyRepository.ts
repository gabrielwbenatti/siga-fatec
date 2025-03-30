import db from "../config/database";

export const classesBibliographyRepository = {
  getAll: async (classId: number) => {
    const rows = await db.class_bibliography.findMany({
      where: { class_id: classId },
    });

    return rows;
  },
};
