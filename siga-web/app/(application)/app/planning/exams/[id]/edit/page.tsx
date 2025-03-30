import { showExam } from "@/app/actions/examsActions";
import { Titlebar } from "@/components/SiGA/Titlebar";
import ExamsCreateUpdateForm from "../../_components/ExamsCreateUpdateForm";

export default async function ExamsEditIDPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await showExam(id);

  if (!result.success || !result.data) {
    return (
      <>
        <Titlebar.Root>
          <Titlebar.Title title="Editando avaliação" />
        </Titlebar.Root>

        <h1 className="px-4">Não foi possível consultar os dados.</h1>
      </>
    );
  }

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title={result.data.title} />
      </Titlebar.Root>

      <ExamsCreateUpdateForm initialData={result.data} />
    </>
  );
}
