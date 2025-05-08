export interface ClassPlanWithRelations {
  id: number;
  title: string;
  description: string;
  planned_date: Date | null;
  applied_date: Date | null;
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
