import { InputHTMLAttributes } from "react";

interface SigaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function SigaInput({ label, ...rest }: SigaInputProps) {
  return (
    <>
      <div>
        <label className="block mb-2 text-sm font-medium">{label}</label>
        <input
          {...rest}
          className={`px-4 py-2 rounded-lg bg-light-surfaceContainerHighest focus:outline-none ${rest.className}`}
        />
      </div>
    </>
  );
}

export default SigaInput;
