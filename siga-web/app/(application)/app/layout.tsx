import { ReactNode } from "react";
import { ROUTES } from "@/lib/routes";
import { BookOpenCheck, Files, Home, Notebook, UsersRound } from "lucide-react";
import NavbarMenu from "./_components/NavbarMenu";

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
    <div className="absolute h-full w-full">
      <NavbarMenu data={routes} />
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
