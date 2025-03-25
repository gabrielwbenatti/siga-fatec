import { FC, JSX, ReactNode } from "react";
import SidebarMenuItem from "./SidebarMenuItem";

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
