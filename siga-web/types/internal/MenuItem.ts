import { ReactNode } from "react";

export interface MenuItem {
  caption: string;
  href: string;
  icon: ReactNode;
  soon?: boolean;
}
