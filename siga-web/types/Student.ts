interface Student {
  id: number;
  first_name: string;
  last_name: string;
  user_id: number;
  phone1?: string;
  phone2?: string;
  user: {
    email: string;
  };
  class_students: {
    computed_grade: number;
  }[];
}

export interface IStudentResponse {
  id: number;
  full_name: string;
  phone1: string;
  phone2: string;
  email: string;
  computed_grade: number;
  frequency: number;
}

export default Student;
