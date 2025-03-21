"use client";

import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { ReactNode, useState } from "react";

interface NavbarMenuProps {
  data: { caption: string; href: string; icon: ReactNode }[];
}

const NavbarMenu = ({ data }: NavbarMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 drop-shadow-md md:px-32">
      <a className="text-2xl font-bold" href="#">
        SiGA
      </a>

      <ul className="hidden items-center gap-12 text-base font-semibold text-black xl:flex">
        {data.map((e) => (
          <li
            className="cursor-pointer rounded-lg p-3 transition-all hover:bg-primary hover:text-white"
            key={e.href}
          >
            <a href={e.href}>{e.caption}</a>
          </li>
        ))}
      </ul>

      {/* <div className="relative hidden items-center justify-center gap-3 md:flex">
        <Search className="absolute left-3 size-5" />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="rounded-xl border-2 py-2 pl-10 pr-3"
        />
      </div> */}

      <Button
        size="icon"
        variant="outline"
        className="cursor-pointer xl:hidden"
        onClick={() => {
          console.log(String(isMenuOpen));
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <Menu />
      </Button>

      <div
        className={`absolute left-0 top-16 flex w-full transform flex-col items-center gap-6 bg-white pb-6 text-lg font-semibold transition-transform xl:hidden ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        {data.map((e) => (
          <li
            className="w-full cursor-pointer list-none p-4 text-center transition-all hover:bg-primary hover:text-white"
            key={e.href}
          >
            <a href={e.href}>{e.caption}</a>
          </li>
        ))}
      </div>
    </header>
  );
};

export default NavbarMenu;
