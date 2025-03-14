import { ReactNode } from "react";

interface InputWrapperProps {
  className?: string;
  children: ReactNode;
}

export default function InputWrapper({
  children,
  className,
}: InputWrapperProps) {
  return <div className={`flex flex-col gap-1.5 ${className}`}>{children}</div>;
}
