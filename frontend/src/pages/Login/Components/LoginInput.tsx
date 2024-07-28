import { ChangeEventHandler } from "react";

interface LoginInputProps {
  label: string;
  placeholder: string;
  inputType: "password" | "email";
  autoComplete?: "true" | "false" | null;
  onChange?: ChangeEventHandler<HTMLInputElement> | null;
}

function LoginInput({
  label,
  placeholder = "",
  inputType,
  autoComplete = "true",
  onChange,
}: LoginInputProps) {
  return (
    <>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <input
          autoComplete={autoComplete!}
          type={inputType!}
          placeholder={placeholder}
          onChange={onChange!}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </>
  );
}

export default LoginInput;
