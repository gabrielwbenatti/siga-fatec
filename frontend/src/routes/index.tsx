import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import MaterialsPage from "../pages/Home/Materials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world </div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/materials",
    element: <MaterialsPage />,
  },
]);

export default router;
