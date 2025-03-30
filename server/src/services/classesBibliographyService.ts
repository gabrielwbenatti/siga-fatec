import { classesBibliographyRepository } from "../repository/classesBibliographyRepository";

export const classesBibliographyService = {
  getAll: async (classId: number) => {
    return classesBibliographyRepository.getAll(classId);
  },
};
