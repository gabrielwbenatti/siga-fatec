import { FC, ReactNode } from "react";

interface TitleBarProps {
  title: string;
  children?: ReactNode;
}

const TitleBar: FC<TitleBarProps> = ({ title, children }: TitleBarProps) => {
  return (
    <div className="flex items-center justify-between bg-white md:p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex gap-1.5">{children}</div>
    </div>
  );
};

export default TitleBar;
