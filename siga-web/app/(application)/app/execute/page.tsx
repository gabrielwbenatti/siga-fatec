import { Titlebar } from "@/components/SiGA/Titlebar";
import { ROUTES } from "@/lib/routes";

export default function ExecutePage() {
  const routes = [
    { caption: "Definir Materiais", href: ROUTES.EXECUTE.MATERIALS.LIST },
    { caption: "Chamada online", href: ROUTES.EXECUTE.ATTENDANCE.LIST },
  ];

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Executar" />
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
}
