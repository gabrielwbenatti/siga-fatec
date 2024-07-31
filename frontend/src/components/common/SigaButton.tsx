import { ButtonHTMLAttributes } from "react";

interface SigaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function SigaButton({ ...props }: SigaButtonProps) {
  return (
    <>
      <button
        {...props}
        className={`rounded-full bg-light-primary text-light-onPrimary px-6 py-2 flex gap-2 ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
}

export default SigaButton;
