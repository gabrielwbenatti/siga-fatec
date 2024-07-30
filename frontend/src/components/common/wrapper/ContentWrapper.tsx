import { JsxChildrenProps } from "../../../types/props";

function ContentWrapper({ children }: JsxChildrenProps) {
  return (
    <>
      <div className="space-y-4">{children}</div>
    </>
  );
}

export default ContentWrapper;
