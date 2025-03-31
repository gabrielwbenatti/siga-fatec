import { GridMenu } from "@/components/SiGA/GridMenu/indext";
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

      <GridMenu.Root>
        {routes.map((r, i) => (
          <GridMenu.Item
            key={i}
            href={r.href}
            caption={r.caption}
            icon={r.icon}
          />
        ))}
      </GridMenu.Root>
    </>
  );
}
