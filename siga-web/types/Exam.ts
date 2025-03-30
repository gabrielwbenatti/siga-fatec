interface Exam {
  id?: number;
  class_id?: number;
  title: string;
  description?: string;
  planned_date: string;
  applied_date?: string;
  weight: number;
  abbreviation: string;
}

export default Exam;
