import { ROUTES } from "@/lib/routes";
import { Titlebar } from "@/components/SiGA/Titlebar";
import {
  BookIcon,
  CopyIcon,
  NotebookIcon,
  SquareSigmaIcon,
} from "lucide-react";
import { GridMenu } from "@/components/SiGA/GridMenu/indext";
import { MenuItem } from "@/types/internal/MenuItem";

const HomePlanningPage = async () => {
  const routes: MenuItem[] = [
    {
      caption: "Copiar Plano",
      href: "#",
      icon: <CopyIcon />,
      soon: true,
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

      <GridMenu.Root>
        {routes.map((r, i) => (
          <GridMenu.Item
            key={i}
            href={r.href}
            caption={r.caption}
            icon={r.icon}
            soon={r.soon}
          />
        ))}
      </GridMenu.Root>
    </>
  );
};

export default HomePlanningPage;
