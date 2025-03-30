export const ROUTES = {
  LOGIN: "/login",
  CLASS_SELECTION: "/class-selection",

  HOME: "/app",

  STUDENTS: {
    LIST: "/app/execute/students",
    EDIT: (id: number) => `/app/execute/students/${id}/edit`,
  },

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
    },
  },

  PLANNING: {
    LIST: "/app/planning",

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
    },
  },
} as const;
