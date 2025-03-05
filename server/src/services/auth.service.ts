import { compare } from "bcrypt";
import db from "../config/database";
import { SignJWT } from "jose";
import SigaError from "../erros/SigaError";
import StatusCode from "../utils/http-status-code";

class AuthService {
  signIn = async (body: any) => {
    const secretKey = process.env.SECRET_KEY;
    const secret = new TextEncoder().encode(secretKey);
    const alg = "HS256";

    const user = await db.users.findFirst({
      include: { teacher: true },
      where: {
        OR: [{ username: body.email }, { email: body.email }],
      },
    });

    if (!user) {
      throw new SigaError("User not found", StatusCode.BAD_REQUEST);
    }

    const isMatch = await compare(body.password, user.password);
    if (!isMatch) {
      throw new SigaError("Invalid Credentials", StatusCode.BAD_REQUEST);
    }

    const [teacher] = user.teacher;

    const jwt = await new SignJWT({
      user_id: user.id,
      teacher_id: teacher.id,
    })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(secret);

    return {
      token: jwt,
    };
  };
}

export default new AuthService();
