"use server";

import { createServerApi } from "@/lib/api/server";
import ClassPlan from "@/types/ClassPlan";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function fetchClassPlans(): Promise<{
  success: boolean;
  error?: string;
  data: ClassPlan[];
}> {
  try {
    const api = await createServerApi();
    const res = await api.get<any>("/classes/plans");
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

export async function createClassPlan(formData: FormData) {
  const cookieStore = await cookies();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string | undefined;
  const planned_date = formData.get("planned_date") as string;
  const applied_date = formData.get("applied_date") as string | undefined;

  try {
    const classId = cookieStore.get("class_id")?.value;

    const api = await createServerApi();
    await api.post("/classes/plans", {
      class_id: Number(classId),
      title,
      description,
      planned_date,
      applied_date,
    });

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function updateClassPlan(planId: number, formData: FormData) {
  const cookieStore = await cookies();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string | undefined;
  const planned_date = formData.get("planned_date") as string;
  const applied_date = formData.get("applied_date") as string | undefined;

  try {
    const classId = cookieStore.get("class_id")?.value;

    const api = await createServerApi();
    await api.put(`/classes/plans/${planId}`, {
      id: planId,
      class_id: Number(classId),
      title,
      description,
      planned_date,
      applied_date,
    });

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function fetchClassPlanById(planId: string): Promise<ClassPlan> {
  const api = await createServerApi();
  const res = await api.get(`/classes/plans/${planId}`);
  const { data } = res;

  return data;
}
