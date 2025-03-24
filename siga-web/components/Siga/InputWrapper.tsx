import { ReactNode } from "react";

interface InputWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function InputWrapper({
  children,
  className,
}: InputWrapperProps) {
  return <div className={`flex flex-col gap-2 ${className}`}>{children}</div>;
}
