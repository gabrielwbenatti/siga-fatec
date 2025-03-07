"use server";

import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function logIn(
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const api = axios.create({
      baseURL: process.env.API_URL || "http://localhost:8000/api/v1",
      headers: { "Content-Type": "application/json" },
    });

    const res = await api.post("/auth/login", { email, password });

    const { data } = res;
    const cookieStore = await cookies();

    cookieStore.set("teacher_id", data.teacher_id, {
      httpOnly: true,
      path: "/",
    });

    return { success: true };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return { success: false, error: "Não foi possível conectar ao servidor" };
    }
    console.log(error);
    return { success: false, error: "Erro ao processar a requisição" };
  }
}
