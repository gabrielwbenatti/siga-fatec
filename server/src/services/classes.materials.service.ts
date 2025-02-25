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
    const { class_id, title, description, file_format } = body;
    const aggregations = await db.class_materials.aggregate({
      _max: { list_index: true },
      where: { class_id },
    });

    try {
      const result = await db.class_materials.create({
        data: {
          class_id,
          title,
          description,
          file_format,
          list_index: aggregations._max.list_index || 0,
        },
      });

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
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

  deleteClassMaterial = async (id: number, classId: number) => {
    try {
      const result = await db.class_materials.delete({
        where: {
          id: id,
          class_id: classId,
        },
      });

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  updateClassMaterial = async (id: number, classId: number, body: any) => {
    const { class_id, description, file_format, list_index, title } = body;

    try {
      const result = await db.class_materials.update({
        data: {
          class_id,
          description,
          file_format,
          list_index,
          title,
        },
        where: { id, class_id: classId },
      });

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

export default new ClassesMaterialsService();
