"use server";

import { createServerApi } from "@/lib/api/server";
import ClassBibliography from "@/types/ClassBibliography";
import { AxiosError } from "axios";

export async function fetchBibliography(): Promise<{
  success: boolean;
  error?: string;
  data: ClassBibliography[];
}> {
  try {
    const api = await createServerApi();
    const res = await api.get("/classes/bibliography");
    const { data } = res;

    return { success: true, data };
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return {
        success: false,
        error: error.response?.data.message,
        data: [],
      };
    }

    return { success: false, error: "Erro ao processar requisição", data: [] };
  }
}
