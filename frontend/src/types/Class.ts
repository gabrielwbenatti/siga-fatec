import { Discipline } from "./Discipline";

export type Class = {
  id: number;
  semester: number;
  year: number;

  discipline: Discipline;
};
