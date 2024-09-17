import api from "./api";

const getClassExams = async (classId: string) => {
  const response = await api.get("/classes/exams", {
    headers: { "class-id": classId },
  });

  return response;
};

export { getClassExams };
