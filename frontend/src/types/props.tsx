import { ReactNode } from "react";

export interface JsxChildrenProps {
  key?: string | number | undefined;
  className?: string | undefined;
  children?: ReactNode;
}
