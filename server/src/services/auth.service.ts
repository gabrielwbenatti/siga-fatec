import db from "../config/database";
import * as bcrypt from "bcrypt";

class AuthService {
  signIn = async (body: any) => {
    const user = await db.users.findFirst({
      include: { teacher: true },
      where: {
        OR: [{ username: body.email }, { email: body.email }],
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(body.password, user.password);

    if (!isMatch) {
      throw new Error("Invalid Credentials");
    }

    return user;
  };
}

export default new AuthService();
