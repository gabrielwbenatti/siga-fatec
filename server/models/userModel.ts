import { client } from "../services/apiConfig.ts";

interface UserModel {
  id: number;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const findByUsername = async (username: string) => {
  try {
    await client.connect();
    const result = await client.queryObject<UserModel>(
      `SELECT * FROM users WHERE username = $username`,
      { username: username }
    );
    return result.rows[0];
  } catch (error) {
    console.error("error", error);
  }
};

export { type UserModel, findByUsername };
