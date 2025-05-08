"use server";

import { createServerApi } from "@/lib/api/server";
import { TeacherDashboard } from "@/types/Teacher";
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

export async function fetchTeacherDashboard(): Promise<{
  success: boolean;
  error?: string;
  data: TeacherDashboard | null;
}> {
  const api = await createServerApi();

  try {
    const res = await api.get("/teachers/dashboard/info");
    const { data } = res;

    return { success: true, data };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: String(error),
      data: null,
    };
  }
}
