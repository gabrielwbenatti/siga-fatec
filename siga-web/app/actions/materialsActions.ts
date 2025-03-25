"use server";

import { createServerApi } from "@/lib/api/server";
import ClassMaterial from "@/types/ClassMaterial";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function fetchClassMaterials(): Promise<{
  success: boolean;
  error?: string;
  data: ClassMaterial[];
}> {
  try {
    const api = await createServerApi();
    const res = await api.get("/classes/materials");
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

export async function store(
  data: ClassMaterial,
): Promise<{ success: boolean; error?: string }> {
  const cookieStore = await cookies();

  try {
    const classId = cookieStore.get("class_id")?.value;

    const api = await createServerApi();
    await api.post("/classes/materials", {
      ...data,
      class_id: Number(classId),
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.message) {
      return { success: false, error: error.response?.data.message };
    }
    console.log(error);
    return { success: false };
  }
}

export async function fetchMaterialById(
  materialId: string,
): Promise<ClassMaterial> {
  const api = await createServerApi();
  const res = await api.get(`/classes/materials/${materialId}`);
  const { data } = res;

  return data;
}

export async function update(
  data: ClassMaterial,
): Promise<{ success: boolean; error?: string }> {
  const cookieStore = await cookies();

  try {
    const classId = cookieStore.get("class_id")?.value;
    const { id } = data;

    const api = await createServerApi();
    await api.put(`/classes/materials/${id}`, {
      ...data,
      class_id: Number(classId),
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.message) {
      return { success: false, error: error.response?.data.message };
    }
    console.log(error);
    return { success: false };
  }
}

export async function reorderClassMaterial(
  data: { id: string; title: string; list_index?: number }[],
): Promise<{ success: boolean }> {
  try {
    const api = await createServerApi();
    const res = await api.patch("/classes/materials", data);

    if (res.status !== 200) {
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
