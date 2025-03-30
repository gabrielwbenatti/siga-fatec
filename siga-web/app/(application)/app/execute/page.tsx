import { Titlebar } from "@/components/SiGA/Titlebar";
import { ROUTES } from "@/lib/routes";
import { FileIcon, UserCheck2Icon } from "lucide-react";

export default function ExecutePage() {
  const routes = [
    {
      caption: "Definir Materiais",
      href: ROUTES.EXECUTE.MATERIALS.LIST,
      icon: <FileIcon />,
    },
    {
      caption: "Chamada online",
      href: ROUTES.EXECUTE.ATTENDANCE.LIST,
      icon: <UserCheck2Icon />,
    },
  ];

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Executar" />
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
}
