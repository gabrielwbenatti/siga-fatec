import { ROUTES } from "@/lib/routes";
import { Titlebar } from "@/components/SiGA/Titlebar";
import {
  BookIcon,
  CopyIcon,
  NotebookIcon,
  SquareSigmaIcon,
} from "lucide-react";

const HomePlanningPage = async () => {
  const routes = [
    {
      caption: "Copiar Plano",
      href: "#",
      icon: <CopyIcon />,
    },
    {
      caption: "Planejar Aulas",
      href: ROUTES.PLANNING.CLASSES.LIST,
      icon: <NotebookIcon />,
    },
    {
      caption: "Definir Avaliações",
      href: ROUTES.PLANNING.EXAMS.LIST,
      icon: <SquareSigmaIcon />,
    },
    {
      caption: "Definir Bibliografia",
      href: ROUTES.PLANNING.BIBLIOGRAPHY.LIST,
      icon: <BookIcon />,
    },
  ];

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Planejamento" />
      </Titlebar.Root>

      <div className="grid grid-cols-1 gap-2 px-4 md:grid-cols-2 md:gap-3 lg:grid-cols-3 xl:grid-cols-4">
        {routes.map((r, i) => (
          <a
            key={i}
            href={r.href}
            className="grid w-full gap-1 rounded-lg border bg-white px-4 pb-4 pt-10 shadow-md hover:shadow-lg"
          >
            {r.icon}
            <span>{r.caption}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default HomePlanningPage;
