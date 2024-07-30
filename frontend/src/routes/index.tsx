import { createBrowserRouter, RouteObject } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import MaterialsPage from "../pages/Home/Materials";
import PlanningPage from "../pages/Home/Planning";
import MaterialCreatePage from "../pages/Home/Materials/Create";

const router = createBrowserRouter([
  { path: "/", element: <div>Hello world </div> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "/home/planning",
        element: <PlanningPage />,
      },
      {
        path: "/home/materials",
        element: <MaterialsPage />,
      },
      {
        path: "/home/materials/create",
        element: <MaterialCreatePage />,
      },
    ],
  },
]);

export default router;
