export interface Class {
  id: number;
  teacher_id: number;
  discipline_id: number;
  semester: number;
  year: number;
  finished: boolean;
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

export interface ClassSummary {
  id: number;
  semester: number;
  year: number;
  studentCount: number;
  discipline: {
    id: number;
    name: string;
    abbreviation: string;
    course: {
      id: number;
      name: string;
      abbreviation: string;
    };
  };
}

export default Class;
