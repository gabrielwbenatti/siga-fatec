"use server";

import { createServerApi } from "@/lib/api/server";
import ClassMaterial from "@/types/ClassMaterial";
import { extractFileExtension } from "@/utils/file_helper";
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

export async function createClassMaterial(formData: FormData) {
  const cookieStore = await cookies();

  const file = formData.get("file") as File;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  try {
    const classId = cookieStore.get("class_id")?.value;
    const extension = extractFileExtension(file.name);

    const api = await createServerApi();
    await api.post("/classes/materials", {
      class_id: Number(classId),
      file_format: extension,
      title,
      description,
    });

    return { success: true };
  } catch (error) {
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

export async function updateClassMaterial(
  materialId: number,
  formData: FormData,
) {
  const cookieStore = await cookies();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  try {
    const classId = cookieStore.get("class_id")?.value;

    const api = await createServerApi();
    await api.put(`/classes/materials/${materialId}`, {
      id: materialId,
      class_id: Number(classId),
      title,
      description,
    });

    return { success: true };
  } catch (error) {
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
