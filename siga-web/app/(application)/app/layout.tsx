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
    <div className="bg-gray-100 md:flex md:h-screen md:flex-row">
      <SidebarMenu routes={routes} />
      <main className="h-screen w-full">{children}</main>
    </div>
  );
};

export default HomeLayout;
