import { JsxChildrenProps } from "../../../types/props";

interface ContentWrapperProps extends JsxChildrenProps {}

function ContentWrapper({ ...props }: ContentWrapperProps) {
  return (
    <>
      <div {...props} className={`space-y-4 mb-8 ${props.className}`}>
        {props.children}
      </div>
    </>
  );
}

export default ContentWrapper;
