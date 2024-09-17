import { ClassPlanning } from "../types/ClassPlanning";
import api from "./api";

const getClassesPlanning = async (classId: string) => {
  const response = await api.get("/classes/planning", {
    headers: { "Class-Id": classId },
  });

  return response;
};

const storeClassPlanning = async (planning: ClassPlanning) => {
  const response = await api.post("/classes/planning", planning);

  return response;
};

const showClassPlanning = async (planningId: number) => {
  const response = await api.get(`/classes/planning/${planningId}`);

  return response;
};

const updateClassPlanning = async (planning: ClassPlanning) => {
  const response = await api.put("/classes/planning", planning);

  return response;
};

export {
  getClassesPlanning,
  storeClassPlanning,
  showClassPlanning,
  updateClassPlanning,
};
