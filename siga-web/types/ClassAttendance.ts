interface Schedule {
  id: number;
  start_time: string;
  end_time: string;
}

interface Plan {
  id: number;
  title: string;
  description: string;
  planned_date: string;
  applied_date: string;
}

interface Attendance {
  is_present: boolean;
  time: string;
  schedule_id: number;
}

interface Student {
  name: string;
  id: number;
  attendances: Attendance[];
}

interface ClassAttendance {
  plan: Plan;
  schedules: Schedule[];
  students: Student[];
}

export default ClassAttendance;
