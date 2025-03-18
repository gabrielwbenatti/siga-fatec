import { ReactNode } from "react";

interface TitleBarProps {
  title: string;
  children?: ReactNode;
}

export default function TitleBar({ title, children }: TitleBarProps) {
  return (
    <div className="mb-4 flex items-center justify-between bg-white px-4 pb-2 pt-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex gap-1.5">{children}</div>
    </div>
  );
}
