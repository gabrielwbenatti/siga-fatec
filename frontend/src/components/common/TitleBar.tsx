import { JsxChildrenProps } from "../../types/props";

interface SigaTitleBarProps extends JsxChildrenProps {
  title: string;
}

function SigaTitleBar({ ...props }: SigaTitleBarProps) {
  return (
    <>
      <div className="flex h-10 items-center justify-between">
        {props.title && <h1 className="text-lg font-bold">{props.title}</h1>}
        {props.children && props.children}
      </div>
    </>
  );
}

export default SigaTitleBar;
