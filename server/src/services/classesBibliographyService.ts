import { classesBibliographyRepository } from "../repository/classesBibliographyRepository";

export const classesBibliographyService = {
  getAll: async (classId: number) => {
    return classesBibliographyRepository.getAll(classId);
  },

  create: async (classId: number, data: any) => {
    const result = await classesBibliographyRepository.create(classId, data);
    return result;
  },

  getById: async (classId: number, id: number) => {
    const result = await classesBibliographyRepository.getById(classId, id);
    return result;
  },

  update: async (classId: number, id: number, data: any) => {
    const result = await classesBibliographyRepository.update(
      classId,
      id,
      data
    );
    return result;
  },

  delete: async (classId: number, id: number) => {
    const result = await classesBibliographyRepository.delete(classId, id);
    return result;
  },
};
