import { LiHTMLAttributes } from "react";

interface SigaListItemProps extends LiHTMLAttributes<HTMLDivElement> {}

function SListItem({ ...props }: SigaListItemProps) {
  return (
    <>
      <div
        {...props}
        className={`px-4 py-2 cursor-pointer 
          bg-light-surfaceContainerLow hover:bg-light-onSurface/5 
          ${props.className}`}
      >
        {props.children}
      </div>
    </>
  );
}

export default SListItem;
