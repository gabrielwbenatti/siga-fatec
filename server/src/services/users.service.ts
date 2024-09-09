import { genSalt, hash } from "bcrypt";
import db from "../config/database";

class UsersService {
  createUser = async (body: any) => {
    const salt = await genSalt(8);
    const newPassword = await hash(body.password, salt);

    const result = await db.users.create({
      data: {
        username: body.username,
        email: body.email,
        password: newPassword,
      },
    });

    return result;
  };
}

export default new UsersService();
