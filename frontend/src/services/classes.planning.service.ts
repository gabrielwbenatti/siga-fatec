import api from "./api";

export const getClassesPlanning = async (classId: number) => {
  const response = await api.get("/classes/planning", {
    headers: { "Class-Id": classId },
  });

  return response;
};
