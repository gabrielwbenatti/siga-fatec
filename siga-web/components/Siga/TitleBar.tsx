import { FC, ReactNode } from "react";

interface TitleBarProps {
  title: string;
  children?: ReactNode;
}

const TitleBar: FC<TitleBarProps> = ({ title, children }: TitleBarProps) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex gap-1.5">{children}</div>
    </div>
  );
};

export default TitleBar;
