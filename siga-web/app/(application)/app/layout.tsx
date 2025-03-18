import { ROUTES } from "@/lib/routes";
import { LogOut } from "lucide-react";
import { ReactNode } from "react";
import SidebarMenuItem from "./components/SidebarMenuItem";

const HomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const routes = [
    { caption: "Início", href: ROUTES.HOME },
    { caption: "Planejamento", href: ROUTES.PLANS.LIST },
    { caption: "Materiais de Aula", href: ROUTES.MATERIALS.LIST },
    { caption: "Avaliações", href: ROUTES.EXAMS.LIST },
    { caption: "Alunos", href: ROUTES.STUDENTS.LIST },
  ];

  return (
    <div className="bg-gray-100 md:flex md:h-screen md:flex-row">
      <nav className="hidden bg-white md:block md:h-full md:w-[300px]">
        <ul className="flex flex-col justify-between p-4 md:h-full">
          <div className="flex flex-col gap-2">
            {routes.map((item) => (
              <SidebarMenuItem
                key={item.href}
                caption={item.caption}
                href={item.href}
              />
            ))}
          </div>
          <SidebarMenuItem
            key={"/logout"}
            caption={"Sair"}
            href={"/logout"}
            icon={<LogOut />}
            className="text-red-500"
          />
        </ul>
      </nav>
      <main className="h-screen w-full">{children}</main>
    </div>
  );
};

export default HomeLayout;
