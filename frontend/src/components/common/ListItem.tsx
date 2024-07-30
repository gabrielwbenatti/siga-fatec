import { JsxChildrenProps } from "../../types/props";

function SigaListItem({ ...props }: JsxChildrenProps) {
  return (
    <>
      <li
        key={props.key}
        className="flex items-center gap-4 py-2 ps-4 pe-8 cursor-pointer bg-light-surfaceContainerLow hover:bg-light-onSurface/5"
      >
        {props.children}
      </li>
    </>
  );
}

export default SigaListItem;
