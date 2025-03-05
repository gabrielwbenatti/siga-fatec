import { compare } from "bcrypt";
import db from "../config/database";
import { SignJWT } from "jose";

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
      throw new Error("User not found");
    }

    const isMatch = await compare(body.password, user.password);

    if (!isMatch) {
      throw new Error("Invalid Credentials");
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
