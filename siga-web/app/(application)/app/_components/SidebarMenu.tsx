import { FC, JSX, ReactNode } from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import Image from "next/image";
import logotipo2022 from "@/assets/images/logo-cps-2022.svg";

interface SidebarMenuProps {
  routes: {
    caption: string;
    href?: string;
    icon?: ReactNode;
    items?: { caption: string; href: string; icon: JSX.Element }[];
  }[];
}

const SidebarMenu: FC<SidebarMenuProps> = ({ routes }: SidebarMenuProps) => {
  return (
    <nav className="hidden bg-white md:block md:h-full md:w-[300px]">
      <Image
        src={logotipo2022}
        alt={"Logotipo 55 Anos CPS"}
        height={80}
        className="p-4"
      />
      <ul className="flex flex-col justify-between p-4 md:h-full">
        <div className="flex flex-col gap-2">
          {routes.map((r, i) =>
            r.items ? (
              <div className="mb-4" key={i}>
                <span>{r.caption}</span>
                {r.items.map((it, ix) => (
                  <SidebarMenuItem
                    key={ix}
                    caption={it.caption}
                    href={it.href}
                    icon={it.icon}
                  />
                ))}
              </div>
            ) : (
              <SidebarMenuItem
                key={i}
                caption={r.caption}
                href={r.href}
                icon={r.icon}
                className="mb-4"
              />
            ),
          )}
        </div>
      </ul>
    </nav>
  );
};

export default SidebarMenu;
