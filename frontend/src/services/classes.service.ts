import api from "./api";

const getClasses = async (teacherId: string) => {
  const response = await api.get("/classes", {
    headers: {
      "teacher-id": String(teacherId),
    },
  });

  return response;
};

export { getClasses };
