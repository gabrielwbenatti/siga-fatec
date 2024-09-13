import { TextareaHTMLAttributes } from "react";

interface SigaTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

function SigaTextArea({ label, ...rest }: SigaTextAreaProps) {
  return (
    <>
      <div>
        {label && (
          <label className="block mb-2 text-sm font-medium">{label}</label>
        )}
        <textarea
          {...rest}
          className={`px-4 py-2 rounded-lg bg-light-surfaceContainerHighest focus:outline-none ${rest.className}`}
        />
      </div>
    </>
  );
}

export default SigaTextArea;
