"use server";

import { createServerApi } from "@/lib/api/server";
import Student from "@/types/Student";
import { AxiosError } from "axios";

export async function fetchStudents(): Promise<{
  success: boolean;
  error?: string;
  data: Student[];
}> {
  try {
    const api = await createServerApi();
    const res = await api.get("/classes/students");
    const { data } = res;

    return { success: true, data };
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError && error.response?.data.message) {
      return {
        success: false,
        error: error.response?.data.message,
        data: [],
      };
    }
    return {
      success: false,
      error: "Não foi possível conectar ao servidor",
      data: [],
    };
  }
}
