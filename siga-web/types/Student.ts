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

export default Student;
