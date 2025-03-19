"use server";

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

export async function storeExam(
  data: Exam,
): Promise<{ success: boolean; error?: string }> {
  try {
    const api = await createServerApi();
    await api.post("/classes/exams", data);

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

export async function showExam(
  id: string,
): Promise<{ success: boolean; data?: Exam }> {
  try {
    const api = await createServerApi();
    const res = await api.get(`/classes/exams/${id}`);
    const { data } = res;

    console.log(data);

    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function updateExam(
  data: Exam,
): Promise<{ success: boolean; error?: string }> {
  try {
    const api = await createServerApi();
    await api.put(`/classes/exams/${data.id}`, data);

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
