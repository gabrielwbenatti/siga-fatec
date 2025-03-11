"use client";

import { ReactNode } from "react";

export default function SidebarMenuItem({
  caption,
  href,
  icon,
  className = "",
}: Readonly<{
  href: string;
  caption: string;
  className?: string;
  icon?: ReactNode;
}>) {
  return (
    <li className={`text-ellipsis rounded-lg hover:bg-primary/10 ${className}`}>
      <a className="flex w-full gap-2 p-2" href={href}>
        {icon}
        {caption}
      </a>
    </li>
  );
}
