interface ClassPlan {
  id?: number;
  title: string;
  description?: string;
  planned_date: string;
  applied_date?: string;
  class_id?: number;
  info_for_absent?: string;
}

export default ClassPlan;
