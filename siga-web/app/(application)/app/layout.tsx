import { ROUTES } from "@/lib/routes";
import { BookOpenCheck, Files, Home, Notebook, UsersRound } from "lucide-react";
import { ReactNode } from "react";
import SidebarMenuItem from "./_components/SidebarMenuItem";

const HomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const routes = [
    { caption: "Início", href: ROUTES.HOME, icon: <Home /> },
    { caption: "Planejamento", href: ROUTES.PLANS.LIST, icon: <Notebook /> },
    {
      caption: "Materiais de Aula",
      href: ROUTES.MATERIALS.LIST,
      icon: <Files />,
    },
    { caption: "Avaliações", href: ROUTES.EXAMS.LIST, icon: <BookOpenCheck /> },
    { caption: "Alunos", href: ROUTES.STUDENTS.LIST, icon: <UsersRound /> },
  ];

  return (
    <div className="bg-gray-100 md:flex md:h-screen md:flex-row">
      <nav className="hidden bg-white md:block md:h-full md:w-[300px]">
        <ul className="flex flex-col justify-between p-4 md:h-full">
          <div className="flex flex-col gap-2">
            {routes.map((item) => (
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
      <main className="h-screen w-full">{children}</main>
    </div>
  );
};

export default HomeLayout;
