import { ButtonHTMLAttributes, ReactNode } from "react";

export interface JsxChildrenProps {
  key?: string | number | undefined;
  className?: string | undefined;
  children?: ReactNode;
}

export interface SigaButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}
