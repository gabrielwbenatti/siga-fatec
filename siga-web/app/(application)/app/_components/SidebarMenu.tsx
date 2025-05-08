"use client";

import { FC, JSX, ReactNode } from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import Image from "next/image";
import logotipo2022 from "@/assets/images/logo-cps-2022.svg";
import { usePathname } from "next/navigation";

interface SidebarMenuProps {
  routes: {
    caption: string;
    href?: string;
    icon?: ReactNode;
    items?: { caption: string; href: string; icon: JSX.Element }[];
  }[];
  className?: string;
}

const SidebarMenu: FC<SidebarMenuProps> = ({
  routes,
  className = "",
}: SidebarMenuProps) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/app") return pathname === "/app";

    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className={className}>
      <Image
        src={logotipo2022}
        priority={true}
        alt={"Logotipo 55 Anos CPS"}
        height={70}
        className="p-4"
      />
      <ul className="flex flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          {routes.map((r, i) => (
            <SidebarMenuItem
              key={i}
              caption={r.caption}
              href={r.href}
              icon={r.icon}
              selected={isActive(r.href || "")}
            />
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default SidebarMenu;
