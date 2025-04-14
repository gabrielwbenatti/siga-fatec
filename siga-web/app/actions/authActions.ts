"use server";

import { createServerApi } from "@/lib/api/server";
import Class, { ClassesResponse } from "@/types/Class";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function logIn(
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const cookieStore = await cookies();

  try {
    const api = await createServerApi();

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

    console.log(error);

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

export async function getClassById(): Promise<Class | undefined> {
  const cookieStore = await cookies();
  const classId = cookieStore.get("class_id")?.value;

  try {
    const api = await createServerApi();
    const res = await api.get(`/classes/class/${classId}`);
    const { data } = res;

    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
