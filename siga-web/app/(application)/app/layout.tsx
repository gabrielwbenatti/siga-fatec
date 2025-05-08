import { ROUTES } from "@/lib/routes";
import { BookOpenCheck, Home, Notebook, UserCog2Icon } from "lucide-react";
import { ReactNode } from "react";
import SidebarMenu from "./_components/SidebarMenu";

const HomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const routes = [
    { caption: "Início", href: ROUTES.HOME, icon: <Home /> },
    {
      caption: "Planejamento",
      href: ROUTES.PLANNING.LIST,
      icon: <Notebook />,
    },
    {
      caption: "Executar",
      href: ROUTES.EXECUTE.LIST,
      icon: <BookOpenCheck />,
    },

    {
      caption: "Gerenciar",
      href: ROUTES.MANAGE.LIST,
      icon: <UserCog2Icon />,
    },
  ];

  return (
    <div className="flex h-screen">
      <aside className="hidden bg-white md:block md:h-full md:w-[300px]">
        <SidebarMenu routes={routes} className="h-full" />
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default HomeLayout;
