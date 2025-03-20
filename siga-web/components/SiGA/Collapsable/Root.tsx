import { FC, ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

const Root: FC<RootProps> = ({ children }: RootProps) => {
  return <div className="rounded-lg border shadow-sm">{children}</div>;
};

export default Root;
