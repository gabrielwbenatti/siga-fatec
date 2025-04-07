import { Titlebar } from "@/components/SiGA/Titlebar";
import BibliographyList from "./_components/BibliographyList";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/button";

export default function BibliographyPage() {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Bibliografia" />
        <Titlebar.Actions>
          <Link href={ROUTES.PLANNING.BIBLIOGRAPHY.CREATE}>
            <Button>Novo</Button>
          </Link>
        </Titlebar.Actions>
      </Titlebar.Root>

      <BibliographyList />
    </>
  );
}
