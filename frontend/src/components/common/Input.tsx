import { InputHTMLAttributes } from "react";

interface SigaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function SigaInput({ label, className, ...rest }: SigaInputProps) {
  return (
    <>
      <div>
        <label className="block mb-2 text-sm font-medium">{label}</label>
        <input
          className={`px-4 py-2 rounded-lg bg-light-surfaceContainerHighest focus:outline-none ${className}`}
          {...rest}
        />
      </div>
    </>
  );
}

export default SigaInput;
