import { ReactNode } from "react";

const HomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const routes = [
    { caption: "home", href: "/home" },
    { caption: "planning", href: "/home/planning" },
    { caption: "materials", href: "/home/materials" },
  ];

  return (
    <div>
      <ul>
        {routes.map((e, i) => (
          <li>
            <a href={e.href}>{e.caption}</a>
          </li>
        ))}
      </ul>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
