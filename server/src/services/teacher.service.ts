import db from "../config/database";

class TeachersService {
  createTeacher = async (body: any) => {
    const result = await db.teachers.create({
      data: {
        user_id: body.user_id,
        teach_since: body.teach_since || undefined,
        document: body.document,
        first_name: body.first_name,
        last_name: body.last_name,
      },
    });

    return result;
  };
}

export default new TeachersService();
