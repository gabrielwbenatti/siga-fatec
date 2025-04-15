import * as shadcn from "@/components/ui/input";
import { ComponentProps, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  (props, ref) => <shadcn.Input ref={ref} {...props} />,
);

Input.displayName = "Input";

export default Input;
