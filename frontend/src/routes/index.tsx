import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import MaterialsPage from "../pages/Home/Materials";
import PlanningPage from "../pages/Home/Planning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world </div>,
    errorElement: (
      <>
        <h1>Página não encontrada</h1>
      </>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
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
    ],
  },
]);

export default router;
