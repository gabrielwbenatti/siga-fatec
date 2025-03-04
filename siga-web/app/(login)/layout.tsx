import { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <div className="relative items-center p-4 md:flex md:h-screen">
      {children}
    </div>
  );
};

export default LoginLayout;
