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

export async function storeBibliography(data: ClassBibliography): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const api = await createServerApi();
    await api.post("/classes/bibliography", data);

    return { success: true };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.message) {
      return {
        success: false,
        error: error.response?.data.message,
      };
    }

    console.log(error);
    return { success: false };
  }
}

export async function fetchBibliographyById(
  bibliographyId: string,
): Promise<{ success: boolean; data?: ClassBibliography }> {
  try {
    const api = await createServerApi();
    const res = await api.get(`/classes/bibliography/${bibliographyId}`);
    const { data } = res;

    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function updateBibliography(data: ClassBibliography): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const api = await createServerApi();
    await api.put(`/classes/bibliography/${data.id}`, data);

    return { success: true };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.message) {
      return {
        success: false,
        error: error.response?.data.message,
      };
    }

    console.log(error);
    return { success: false };
  }
}

export async function deleteBibliography(
  bibliographyId: number | string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const api = await createServerApi();
    await api.delete(`/classes/bibliography/${bibliographyId}`);

    return { success: true };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.message) {
      return {
        success: false,
        error: error.response?.data.message,
      };
    }

    console.log(error);
    return { success: false };
  }
}
