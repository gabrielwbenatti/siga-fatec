interface ClassPlan {
  id?: number;
  title: string;
  description?: string;
  planned_date?: Date;
  applied_date?: Date;
  class_id: number;
}

export default ClassPlan;
