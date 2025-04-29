"use client";

import { FC, ReactNode } from "react";

interface SidebarMenuItemProps {
  href?: string;
  caption: string;
  className?: string;
  icon?: ReactNode;
  selected?: boolean;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  caption,
  href,
  icon,
  className = "",
  selected = false,
}: SidebarMenuItemProps) => {
  return (
    <li
      className={`text-ellipsis rounded-lg hover:bg-primary/10 ${className} ${selected ? "bg-[#b20000]/10 text-[#b20000]" : ""}`}
    >
      <a className="flex w-full gap-2 p-2" href={href}>
        {icon}
        {caption}
      </a>
    </li>
  );
};

export default SidebarMenuItem;
