import React from "react";

const LoginLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="relative items-center p-4 md:flex md:h-screen">
      {children}
    </div>
  );
};

export default LoginLayout;
