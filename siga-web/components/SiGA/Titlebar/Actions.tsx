import { FC, ReactNode } from "react";

interface ActionsProps {
  children: ReactNode;
}

const Actions: FC<ActionsProps> = ({ children }: ActionsProps) => {
  return <div className="flex gap-1.5">{children}</div>;
};

export default Actions;
