import { GridMenu } from "@/components/SiGA/GridMenu";
import { Titlebar } from "@/components/SiGA/Titlebar";
import { ROUTES } from "@/lib/routes";
import { MenuItem } from "@/types/internal/MenuItem";
import { UsersIcon } from "lucide-react";

export default function ManagePage() {
  const routes: MenuItem[] = [
    {
      caption: "Alunos",
      href: ROUTES.MANAGE.STUDENTS.LIST,
      icon: <UsersIcon />,
    },
  ];

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Gerenciar" />
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
