import db from "../config/database";

class ClassesMaterialsService {
  getClassesMaterials = async (classId: number) => {
    const result = await db.class_materials.findMany({
      where: { class_id: classId },
      orderBy: { list_index: "asc" },
    });

    return result;
  };

  createClassesMaterials = async (body: any) => {
    const result = Array.isArray(body)
      ? await db.class_materials.createMany({ data: body })
      : await db.class_materials.create({ data: body });

    return result;
  };

  showClassMaterial = async (id: number, classId: number) => {
    const result = await db.class_materials.findFirst({
      where: {
        id: id,
        class_id: classId,
      },
    });

    return result;
  };
}

export default new ClassesMaterialsService();
