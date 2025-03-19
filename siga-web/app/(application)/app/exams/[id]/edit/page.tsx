import { showExam } from "@/app/actions/examsActions";
import { Titlebar } from "@/components/SiGA/Titlebar";
import ExamsCreateUpdateForm from "../../_components/ExamsCreateUpdateForm";

export default async function ExamsEditIDPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await showExam(id);

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title={data?.title!} />
      </Titlebar.Root>

      <ExamsCreateUpdateForm initialData={data} />
    </>
  );
}
