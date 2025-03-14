"use server";

import axios, { AxiosInstance } from "axios";
import { cookies } from "next/headers";

async function createServerApi(): Promise<AxiosInstance> {
  const cookieStore = await cookies();

  // extrai valores dos cookies
  const classId = cookieStore.get("class_id")?.value;
  const teacherId = cookieStore.get("teacher_id")?.value;

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
    headers: {
      "Content-Type": "application/json",
      "teacher-id": teacherId,
      "class-id": classId,
    },
  });
  return api;
}

export { createServerApi };
