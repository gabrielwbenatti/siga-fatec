import { ROUTES } from "@/lib/routes";
import {
  BookCheckIcon,
  BookOpenCheck,
  Home,
  Notebook,
  UsersRound,
} from "lucide-react";
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
      caption: "Planejar",
      items: [
        {
          caption: "Planejamento",
          href: ROUTES.PLANS.LIST,
          icon: <Notebook />,
        },
        {
          caption: "Avaliações",
          href: ROUTES.EXAMS.LIST,
          icon: <BookOpenCheck />,
        },
      ],
    },
    {
      caption: "Executar",
      items: [
        {
          caption: "Materiais",
          href: ROUTES.MATERIALS.LIST,
          icon: <BookOpenCheck />,
        },
        {
          caption: "Chamada on-line",
          href: ROUTES.ATTENDANCE.LIST,
          icon: <BookCheckIcon />,
        },
      ],
    },
    {
      caption: "Gerenciar",
      items: [
        {
          caption: "Alunos",
          href: ROUTES.STUDENTS.LIST,
          icon: <UsersRound />,
        },
      ],
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
