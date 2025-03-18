import { ReactNode } from "react";

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-4 flex items-center justify-between px-4 pb-2 pt-4">
      {children}
    </div>
  );
};

const Title = ({ title }: { title: string }) => {
  return <h1 className="text-2xl font-bold">{title}</h1>;
};

const Actions = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-1.5">{children}</div>;
};

export const Titlebar = {
  Root,
  Title,
  Actions,
};
