export const ROUTES = {
  LOGIN: "/login",
  CLASS_SELECTION: "/class-selection",

  HOME: "/home",
  PLANNING: {
    LIST: "/home/planning",
    CREATE: "/home/planning/new",
  },
  MATERIALS: {
    LIST: "/home/materials",
    CREATE: "/home/materials/new",
  },
} as const;
