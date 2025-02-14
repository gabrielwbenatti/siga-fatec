export const ROUTES = {
  LOGIN: "/login",
  CLASS_SELECTION: "/class-selection",

  HOME: "/home",
  PLANNING: {
    LIST: "/home/planning",
    CREATE: "/home/planning/new",

    ATTENDACE: "/home/planning/attendance",
  },
  MATERIALS: {
    LIST: "/home/materials",
    CREATE: "/home/materials/new",
  },
} as const;
