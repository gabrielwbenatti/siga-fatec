import { HTMLAttributes } from "react";

interface SigaListItemProps extends HTMLAttributes<HTMLLIElement> {}

function SigaListItem({ ...props }: SigaListItemProps) {
  return (
    <>
      <li
        {...props}
        className={`
flex items-center gap-4 py-2 ps-4 pe-8 cursor-pointer bg-light-surfaceContainerLow hover:bg-light-onSurface/5 ${props.className}`}
      >
        {props.children}
      </li>
    </>
  );
}

export default SigaListItem;
