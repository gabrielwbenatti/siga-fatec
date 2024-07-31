import { SigaButtonProps } from "../../types/props";

function SigaTextButton({ ...props }: SigaButtonProps) {
  const isArray = Array.isArray(props.children);

  return (
    <>
      <button
        {...props}
        className={`
          rounded-full text-light-primary bg-transparent 
          py-2 flex gap-2 justify-center items-center 
          ${isArray ? "ps-3 pe-4" : "px-3"}  ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
}

export default SigaTextButton;
