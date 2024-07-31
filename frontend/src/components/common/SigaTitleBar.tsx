import { HTMLAttributes } from "react";

interface SigaTitleBarProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

function SigaTitleBar({ ...props }: SigaTitleBarProps) {
  return (
    <>
      <div
        {...props}
        className={`flex h-10 items-center justify-between ${props.className}`}
      >
        {props.title && (
          <h1 className="text-lg flex-1 font-bold line-clamp-1">
            {props.title}
          </h1>
        )}
        {props.children}
      </div>
    </>
  );
}

export default SigaTitleBar;
