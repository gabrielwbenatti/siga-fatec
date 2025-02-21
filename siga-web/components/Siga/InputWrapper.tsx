import { FC, ReactNode } from "react";

interface InputWrapperProps {
  className?: string;
  children: ReactNode;
}

const InputWrapper: FC<InputWrapperProps> = ({
  children,
  className,
}: InputWrapperProps) => {
  return <div className={`flex flex-col gap-1.5 ${className}`}>{children}</div>;
};

export default InputWrapper;
