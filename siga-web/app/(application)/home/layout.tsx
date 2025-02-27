import { ROUTES } from "@/config/routes";
import { ReactNode } from "react";

const HomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const routes = [
    { caption: "Início", href: ROUTES.HOME },
    { caption: "Planejamento", href: ROUTES.PLANS.LIST },
    { caption: "Materiais de Aula", href: ROUTES.MATERIALS.LIST },
  ];

  return (
    <div className="flex">
      <nav className="md:w-[300px]">
        <ul className="p-4">
          {routes.map((e, i) => (
            <li
              className="flex text-ellipsis rounded-lg hover:bg-primary/10"
              key={i}
            >
              <a className="w-full p-2" href={e.href}>
                {e.caption}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default HomeLayout;
