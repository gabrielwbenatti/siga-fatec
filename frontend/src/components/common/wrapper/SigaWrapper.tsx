import { HTMLAttributes } from "react";

interface SigaRowWrapperProps extends HTMLAttributes<HTMLDivElement> {}

function SigaWrapper({ ...props }: SigaRowWrapperProps) {
  return (
    <>
      <div {...props}>{props.children}</div>
    </>
  );
}

export default SigaWrapper;
