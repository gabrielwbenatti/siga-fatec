interface Student {
  id: number;
  first_name: string;
  last_name: string;
  user_id: number;
  user: {
    email: string;
  };
}

export default Student;
