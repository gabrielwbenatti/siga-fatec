import { Titlebar } from "@/components/SiGA/Titlebar";
import BibliographyCreateUpdateForm from "../_components/BibliographyCreateUpdateForm";

export default function BibliographyNewPage() {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Criar Nova Bibliografia" />
      </Titlebar.Root>

      <BibliographyCreateUpdateForm />
    </>
  );
}
