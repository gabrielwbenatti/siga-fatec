import { Class } from "./Class";

export type ClassPlanning = {
  id?: number;
  class_id?: number;
  planned_date?: string;
  applied_date?: string;
  title?: string;
  description?: string;

  class?: Class;
};
