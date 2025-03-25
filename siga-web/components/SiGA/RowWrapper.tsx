import { ReactNode } from "react";

interface RowWrapperProps {
  children: ReactNode;
  className?: string;
}

const RowWrapper = ({ children, className }: RowWrapperProps) => {
  return (
    <div className={`items-center gap-2 max-md:space-y-4 md:flex ${className}`}>
      {children}
    </div>
  );
};

export default RowWrapper;
