export interface IExamSubmissionResponse {
  formula: string;
  pivot: {
    id: number;
    name: string;
    computed_grade: number;
    class_id: number;
    submissions: {
      exam_id: number;
      abbreviation: string;
      submission: number | null;
    }[];
  }[];
}
