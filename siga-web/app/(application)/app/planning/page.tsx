import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { Titlebar } from "@/components/SiGA/Titlebar";

const HomePlanningPage = async () => {
  const routes = [
    { caption: "Copiar Plano", href: "#" },
    { caption: "Planejar Aulas", href: ROUTES.PLANNING.CLASSES.LIST },
    { caption: "Definir Avaliações", href: ROUTES.PLANNING.EXAMS.LIST },
    {
      caption: "Definir Bibliografia",
      href: ROUTES.PLANNING.BIBLIOGRAPHY.LIST,
    },
  ];

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Planejamento" />
      </Titlebar.Root>

      <div className="grid grid-cols-2 gap-2 px-4 md:grid-cols-3 lg:grid-cols-4">
        {routes.map((r, i) => (
          <a
            key={i}
            href={r.href}
            className="rounded-lg border bg-white px-4 pb-4 pt-10 shadow-md hover:shadow-lg"
          >
            {r.caption}
          </a>
        ))}
      </div>
    </>
  );
};

export default HomePlanningPage;
