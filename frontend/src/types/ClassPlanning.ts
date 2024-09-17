import { Class } from "./Class";

export type ClassPlanning = {
  id?: number;
  class_id: number;
  planned_date?: Date;
  applied_date?: Date;
  title?: string;
  description?: string;

  class?: Class;
};
