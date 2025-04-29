"use server";

import { createServerApi } from "@/lib/api/server";
import ClassAttendance from "@/types/ClassAttendance";
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
    const res = await api.get("/classes/plans");
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
    console.log(error);
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

export async function fetchAttendances(
  planId: string,
): Promise<ClassAttendance> {
  const api = await createServerApi();
  const res = await api.get(`/classes/plans/${planId}/attendances`);
  const { data } = res;

  return data;
}

export async function postAttendances(data: ClassAttendance): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const api = await createServerApi();
    await api.post(`/classes/plans/${data.plan.id}/attendances`, data);

    return { success: true };
  } catch (error) {
    console.log(error);

    if (error instanceof AxiosError && error.response?.data.message) {
      return { success: false, error: error.response?.data.message };
    }
    return { success: false };
  }
}

export async function updateAttendances(data: ClassAttendance): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const api = await createServerApi();
    await api.put(`/classes/plans/${data.plan.id}/attendances`, data);

    return { success: true };
  } catch (error) {
    console.log(error);

    if (error instanceof AxiosError && error.response?.data.message) {
      return { success: false, error: error.response?.data.message };
    }
    return { success: false };
  }
}

export const duplicateClassPlan = async (oldClassId: number) => {
  try {
    const api = await createServerApi();
    await api.post("/classes/duplicate-plans", {
      old_class_id: oldClassId,
    });

    return { success: true };
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return { success: false, error: error.response?.data.message };
    }

    return { success: false, error: "Erro ao processar a requisição" };
  }
};

export const deleteClassPlan = async (planId: number | string) => {
  try {
    const api = await createServerApi();
    await api.delete(`/classes/plans/${planId}`);

    return { success: true };
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return { success: false, error: error.response?.data.message };
    }

    return { success: false, error: "Erro ao processar a requisição" };
  }
};
