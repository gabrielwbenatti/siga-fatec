import { JsxChildrenProps } from "../../../types/props";

function SigaTitleBar({ children }: JsxChildrenProps) {
  return (
    <>
      <div className="flex justify-between">{children}</div>
    </>
  );
}

export default SigaTitleBar;
