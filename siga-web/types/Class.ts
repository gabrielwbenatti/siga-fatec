export interface Class {
  id: number;
  teacher_id: number;
  discipline_id: number;
  semester: number;
  year: number;
  finished: Boolean;
  evaluation_formula?: string;
}

export type ClassesResponse = {
  id: number;
  discipline: {
    id: number;
    name: string;
    abbreviation: string;
    course_id: number;
  };
  semester: number;
  year: number;
};

export default Class;
