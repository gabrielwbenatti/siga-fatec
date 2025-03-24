import { ReactNode } from "react";

interface RowWrapperProps {
  children: ReactNode;
  className?: string;
}

const RowWrapper = ({ children, className }: RowWrapperProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>{children}</div>
  );
};

export default RowWrapper;
