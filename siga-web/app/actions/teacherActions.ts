"use server";

import { createServerApi } from "@/lib/api/server";
import { cookies } from "next/headers";

export async function fetchTeacher() {
  const cookieStore = await cookies();
  const teacherId = cookieStore.get("teacher_id")?.value;

  try {
    const api = await createServerApi();
    const res = await api.get(`/teachers/${teacherId}`);
    const { data } = res;

    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
