import db from "../config/database";
import * as bcrypt from "bcrypt";

class LoginService {
  login = async (body: any) => {
    const result = await db.users.findFirst({
      where: { OR: [{ username: body.username }, { email: body.email }] },
    });

    if (!result) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(body.password, result.password);

    if (!isMatch) {
      throw new Error("Invalid Credentials");
    }

    return result;
  };
}

export default new LoginService();
