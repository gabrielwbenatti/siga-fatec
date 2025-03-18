"use server";

import { createServerApi } from "@/lib/api/server";
import { ClassesResponse } from "@/types/Class";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logIn(
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const cookieStore = await cookies();

  try {
    const api = axios.create({
      baseURL: process.env.API_URL || "http://localhost:8000/api/v1",
      headers: { "Content-Type": "application/json" },
    });

    const res = await api.post("/auth/login", { email, password });
    const { data } = res;

    cookieStore.set("teacher_id", data.teacher_id, {
      httpOnly: true,
      path: "/",
    });

    return { success: true };
  } catch (error) {
    cookieStore.delete("class_id");
    cookieStore.delete("teacher_id");

    if (error instanceof AxiosError && error.response?.data.message) {
      return { success: false, error: error.response?.data.message };
    }

    return { success: false, error: "Erro ao processar a requisição" };
  }
}

export async function fetchClasses(): Promise<{
  success: boolean;
  error?: string;
  data: ClassesResponse[];
}> {
  try {
    const api = await createServerApi();
    const res = await api.get("/classes");
    const { data } = res;

    return { success: true, data };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        error: "Não foi possível conectar ao servidor",
        data: [],
      };
    }

    console.log(error);
    return {
      success: false,
      error: "Erro ao processar a requisição",
      data: [],
    };
  }
}

export async function setClassId(classId: string) {
  const cookieStore = await cookies();
  cookieStore.set("class_id", classId, { httpOnly: true });
}
