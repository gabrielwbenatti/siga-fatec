interface Schedule {
  id: number;
  start_time: string;
  end_time: string;
}

interface Plan {
  id: number;
  title: string;
  description: string;
}

interface Attendance {
  isPresent: boolean;
  student_id: number;
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
