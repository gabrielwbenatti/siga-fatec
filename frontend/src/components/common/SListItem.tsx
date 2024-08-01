import { LiHTMLAttributes } from "react";

interface SigaListItemProps extends LiHTMLAttributes<HTMLLIElement> {}

function SListItem({ ...props }: SigaListItemProps) {
  return (
    <>
      <li
        {...props}
        className={`flex items-center gap-4 py-2 px-4 cursor-pointer 
          bg-light-surfaceContainerLow hover:bg-light-onSurface/5 
          ${props.className}`}
      >
        {props.children}
      </li>
    </>
  );
}

export default SListItem;
