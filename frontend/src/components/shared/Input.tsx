import { InputHTMLAttributes } from "react";

interface SigaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function SigaInput({ label, className, ...rest }: SigaInputProps) {
  return (
    <>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          {label}
        </label>
        <input className={"p-2 rounded-lg " + className} {...rest} />
      </div>
    </>
  );
}

export default SigaInput;
