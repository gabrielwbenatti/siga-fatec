import { Titlebar } from "@/components/SiGA/Titlebar";
import BibliographyCreateUpdateForm from "../../_components/BibliographyCreateUpdateForm";
import { fetchBibliographyById } from "@/app/actions/bibliographyActions";

export default async function BibliographyIdEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await fetchBibliographyById(id);

  if (!result.success || !result.data) {
    return (
      <>
        <Titlebar.Root>
          <Titlebar.Title title="Editando bibliografia" />
        </Titlebar.Root>

        <h1 className="px-4">Não foi possível consultar os dados.</h1>
      </>
    );
  }

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title={result.data.reference} />
      </Titlebar.Root>

      <BibliographyCreateUpdateForm initialData={result.data} />
    </>
  );
}
