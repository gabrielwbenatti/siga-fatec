import { ClassSummary } from "./Class";
import { ClassPlanWithRelations } from "./ClassPlan";

interface Teacher {
  id: number;
  user_id: number;
  teach_since: Date;
  document: string;
  first_name: string;
  last_name: string;
}

export interface TeacherSummary {
  id: number;
  first_name: string;
  last_name: string;
}

export interface TeacherDashboard {
  upcomingClasses: ClassPlanWithRelations[];
  classStats: ClassSummary[];
  currentUser: TeacherSummary;
}

export default Teacher;
