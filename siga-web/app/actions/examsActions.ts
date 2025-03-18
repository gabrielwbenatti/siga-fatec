import { createServerApi } from "@/lib/api/server";
import Exam from "@/types/Exam";
import { AxiosError } from "axios";

export async function fetchExams(): Promise<{
  success: boolean;
  error?: string;
  data: Exam[];
}> {
  try {
    const api = await createServerApi();
    const res = await api.get("/classes/exams");
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
      error: "Erro ao obter dados",
      data: [],
    };
  }
}
