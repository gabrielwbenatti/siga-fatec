import { ROUTES } from "@/config/routes";
import { LogOut } from "lucide-react";
import { ReactNode } from "react";
import SidebarMenuItem from "./_components/SidebarMenuItem";

const HomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const routes = [
    { caption: "Início", href: ROUTES.HOME },
    { caption: "Planejamento", href: ROUTES.PLANS.LIST },
    { caption: "Materiais de Aula", href: ROUTES.MATERIALS.LIST },
  ];

  return (
    <div className="md:flex md:h-screen md:flex-row">
      <nav className="hidden md:block md:h-full md:w-[300px]">
        <ul className="flex flex-col gap-2 p-4 md:h-full">
          {routes.map((item) => (
            <SidebarMenuItem
              key={item.href}
              caption={item.caption}
              href={item.href}
            />
          ))}
          <SidebarMenuItem
            key={"/logout"}
            caption={"Sair"}
            href={"/logout"}
            icon={<LogOut />}
          />
        </ul>
      </nav>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default HomeLayout;
