export const ROUTES = {
  LOGIN: "/login",
  CLASS_SELECTION: "/class-selection",

  HOME: "/app",
  PLANS: {
    LIST: "/app/plans",
    CREATE: "/app/plans/new",
    EDIT: (id: number) => `/app/plans/${id}/edit`,

    ATTENDACE: (id: number) => `/app/plans/${id}/attendance`,
  },
  MATERIALS: {
    LIST: "/app/materials",
    CREATE: "/app/materials/new",
    REORDER: "/app/materials/reorder",
    EDIT: (id: number) => `/app/materials/${id}/edit`,
  },
} as const;
