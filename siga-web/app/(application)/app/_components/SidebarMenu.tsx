import SidebarMenuItem from "./SidebarMenuItem";
import { ReactNode } from "react";

interface SidebarMenuProps {
  data: { caption: string; href: string; icon: ReactNode }[];
}

const SidebarMenu = ({ data }: SidebarMenuProps) => {
  return (
    <nav className="hidden bg-white md:block md:h-full md:w-[300px]">
      <ul className="flex flex-col justify-between p-4 md:h-full">
        <div className="flex flex-col gap-2">
          {data.map((item) => (
            <SidebarMenuItem
              key={item.href}
              icon={item.icon}
              caption={item.caption}
              href={item.href}
            />
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default SidebarMenu;
