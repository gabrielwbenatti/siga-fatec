import { ComponentProps, forwardRef } from "react";
import * as shadcn from "@/components/ui/textarea";

const Textarea = forwardRef<HTMLTextAreaElement, ComponentProps<"textarea">>(
  (props, ref) => <shadcn.Textarea ref={ref} {...props} />,
);

Textarea.displayName = "Textarea";

export default Textarea;
