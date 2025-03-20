import { FC, ReactNode } from "react";

interface BodyProps {
  children: ReactNode;
}

const Body: FC<BodyProps> = ({ children }: BodyProps) => {
  return <div className="border-t p-2">{children}</div>;
};

export default Body;
