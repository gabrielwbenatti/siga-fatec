import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
}

export default LoginPage;
