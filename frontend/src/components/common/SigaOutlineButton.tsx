import { SigaButtonProps } from "../../types/props";

function SigaOutlineButton({ ...props }: SigaButtonProps) {
  const isArray = Array.isArray(props.children);

  return (
    <>
      <button
        {...props}
        className={`
          rounded-full text-light-primary border border-light-outline 
          py-2 flex gap-2 justify-center items-center 
          ${isArray ? "ps-4 pe-6" : "px-6"}  ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
}

export default SigaOutlineButton;
