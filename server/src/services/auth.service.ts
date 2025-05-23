import db from "../config/database";
import * as bcrypt from "bcrypt";
import { BadRequestError } from "../errors/api-error";

class AuthService {
  signIn = async (body: any) => {
    const user = await db.users.findFirst({
      include: { teacher: true },
      where: {
        OR: [{ username: body.email }, { email: body.email }],
      },
    });

    if (!user) {
      throw new BadRequestError("User not found");
    }

    const isMatch = await bcrypt.compare(body.password, user.password);

    if (!isMatch) {
      throw new BadRequestError("Invalid Credentials");
    }

    await db.users.update({
      data: { last_access: new Date() },
      where: { id: user.id },
    });

    const [teacher] = user.teacher;
    return { username: user.username, id: user.id, teacher_id: teacher.id };
  };
}

export default new AuthService();
