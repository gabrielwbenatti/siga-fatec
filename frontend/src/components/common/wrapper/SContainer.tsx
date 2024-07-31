import { HTMLAttributes } from "react";

interface SigaRowWrapperProps extends HTMLAttributes<HTMLDivElement> {}

function SContainer({ ...props }: SigaRowWrapperProps) {
  return (
    <>
      <div {...props}>{props.children}</div>
    </>
  );
}

export default SContainer;
