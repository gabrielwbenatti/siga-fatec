export const ROUTES = {
  LOGIN: "/login",
  CLASS_SELECTION: "/class-selection",

  HOME: "/home",
  PLANS: {
    LIST: "/home/plans",
    CREATE: "/home/plans/new",
    EDIT: (id: number) => `/home/plans/${id}/edit`,

    ATTENDACE: "/home/plans/attendance",
  },
  MATERIALS: {
    LIST: "/home/materials",
    CREATE: "/home/materials/new",
    EDIT: (id: number) => `/home/materials/${id}/edit`,
  },
} as const;
