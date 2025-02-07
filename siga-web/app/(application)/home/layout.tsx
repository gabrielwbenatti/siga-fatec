import { ROUTES } from "@/config/routes";
import { ReactNode } from "react";

const HomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const routes = [
    { caption: "Início", href: "/home" },
    { caption: "Planejamento", href: ROUTES.PLANNING.LIST },
    { caption: "Materiais de Aula", href: ROUTES.MATERIALS.LIST },
  ];

  return (
    <div className="flex">
      <ul className="md:w-[250px]">
        {routes.map((e, i) => (
          <li
            className="text-ellipsis rounded-lg p-1 hover:bg-primary/10"
            key={i}
          >
            <a href={e.href}>{e.caption}</a>
          </li>
        ))}
      </ul>
      <main className="flex-auto">{children}</main>
    </div>
  );
};

export default HomeLayout;
