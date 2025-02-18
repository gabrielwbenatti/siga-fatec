import db from "../config/database";

class ClassesMaterialsService {
  getClassesMaterials = async (classId: number) => {
    const result = await db.class_materials.findMany({
      where: { class_id: classId },
    });

    return result;
  };

  createClassesMaterials = async (body: any) => {
    const result = await db.class_materials.createMany(body);

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
