import { FC, ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

const Root: FC<RootProps> = ({ children }: RootProps) => {
  return (
    <div className="mb-4 flex items-center justify-between px-4 pb-2 pt-4">
      {children}
    </div>
  );
};

export default Root;
