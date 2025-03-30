import { Titlebar } from "@/components/SiGA/Titlebar";
import BibliographyList from "./_components/BibliographyList";

export default function BibliographyPage() {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Bibliografia" />
      </Titlebar.Root>

      <BibliographyList />
    </>
  );
}
