interface ClassPlan {
  id?: number;
  title: string;
  description?: string;
  planned_date: string;
  applied_date?: string;
  class_id: number;
  info_for_absent?: string;
}

export interface ClassPlanWithRelations {
  id: number;
  title: string;
  description: string;
  planned_date: string; // formato ISO
  applied_date: string | null;
  class_id: number;
  info_for_absent: string | null;
  class: {
    id: number;
    discipline: {
      id: number;
      name: string;
      abbreviation: string;
    };
  };
}

export default ClassPlan;
