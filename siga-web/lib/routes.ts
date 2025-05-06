export const ROUTES = {
  LOGIN: "/login",
  CLASS_SELECTION: "/class-selection",

  HOME: "/app",

  EXECUTE: {
    LIST: "/app/execute",

    MATERIALS: {
      LIST: "/app/execute/materials",
      CREATE: "/app/execute/materials/new",
      REORDER: "/app/execute/materials/reorder",
      EDIT: (id: number) => `/app/execute/materials/${id}/edit`,
    },

    ATTENDANCE: {
      LIST: "/app/execute/attendance",
      EDIT: (id: number) => `/app/execute/attendance/${id}/edit`,
    },

    GRADES: {
      LIST: "/app/execute/exam-submissions",
    },
  },

  PLANNING: {
    LIST: "/app/planning",

    COPY_PLAN: {
      LIST: "/app/planning/copy-plan",
    },

    CLASSES: {
      LIST: "/app/planning/classes",
      CREATE: "/app/planning/classes/new",
      EDIT: (id: number) => `/app/planning/classes/${id}/edit`,
      ATTENDACE: (id: number) => `/app/planning/classes/${id}/attendance`,
    },

    EXAMS: {
      LIST: "/app/planning/exams",
      CREATE: "/app/planning/exams/new",
      EDIT: (id: number) => `/app/planning/exams/${id}/edit`,
    },

    BIBLIOGRAPHY: {
      LIST: "/app/planning/bibliography",
      CREATE: "/app/planning/bibliography/new",
      EDIT: (id: number) => `/app/planning/bibliography/${id}/edit`,
    },
  },

  MANAGE: {
    LIST: "/app/manage",

    STUDENTS: {
      LIST: "/app/manage/students",
      EDIT: (id: number) => `/app/manage/students/${id}/edit`,
    },
  },
} as const;
