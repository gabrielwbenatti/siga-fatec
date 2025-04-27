"use server";

import { createServerApi } from "@/lib/api/server";
import { ClassesResponse } from "@/types/Class";
import { AxiosError } from "axios";

export async function fetchFinishedClassPlans(): Promise<{
  success: boolean;
  error?: string;
  data: ClassesResponse[];
}> {
  try {
    const api = await createServerApi();
    const res = await api.get("/classes/finished");
    const { data } = res;

    return { success: true, data };
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return {
        success: false,
        error: "Não foi possível conectar ao servidor",
        data: [],
      };
    }

    return {
      success: false,
      error: "Erro ao processar a requisição",
      data: [],
    };
  }
}
