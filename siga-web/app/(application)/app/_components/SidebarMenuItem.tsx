"use client";

import { FC, ReactNode } from "react";

interface SidebarMenuItemProps {
  href: string;
  caption: string;
  className?: string;
  icon?: ReactNode;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  caption,
  href,
  icon,
  className = "",
}: SidebarMenuItemProps) => {
  return (
    <li className={`text-ellipsis rounded-lg hover:bg-primary/10 ${className}`}>
      <a className="flex w-full gap-2 p-2" href={href}>
        {icon}
        {caption}
      </a>
    </li>
  );
};

export default SidebarMenuItem;
