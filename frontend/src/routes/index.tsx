import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";

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
]);

export default router;
