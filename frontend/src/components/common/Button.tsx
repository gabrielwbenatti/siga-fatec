import { ButtonHTMLAttributes } from "react";

interface SigaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element | JSX.Element[];
}

function SigaButton({ children, className, ...rest }: SigaButtonProps) {
  return (
    <>
      <button
        {...rest}
        className={`rounded-full bg-light-primary text-light-onPrimary px-6 py-2 flex gap-2 ${className}`}
      >
        {children}
      </button>
    </>
  );
}

export default SigaButton;
