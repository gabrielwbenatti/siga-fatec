import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import MaterialsPage from "../pages/Home/Materials";
import PlanningPage from "../pages/Home/Planning";
import MaterialCreatePage from "../pages/Home/Materials/Create";
import ExamsPage from "../pages/Home/Exams";
import PlanningCreatePage from "../pages/Home/Planning/Create";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "/home/planning",
        element: <PlanningPage />,
      },
      {
        path: "/home/planning/create",
        element: <PlanningCreatePage />,
      },
      {
        path: "/home/materials",
        element: <MaterialsPage />,
      },
      {
        path: "/home/materials/create",
        element: <MaterialCreatePage />,
      },
      {
        path: "/home/exams",
        element: <ExamsPage />,
      },
    ],
  },
]);

export default router;
