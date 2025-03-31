import { GridMenu } from "@/components/SiGA/GridMenu/indext";
import { Titlebar } from "@/components/SiGA/Titlebar";
import { ROUTES } from "@/lib/routes";
import { UsersIcon } from "lucide-react";
import { JSX } from "react";

export default function ManagePage() {
  const routes: {
    caption: string;
    href: string;
    icon: JSX.Element;
  }[] = [
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
