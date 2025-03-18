import { Titlebar } from "@/components/SiGA/Titlebar";
import ExamsList from "./_components/ExamsList";
import { fetchExams } from "@/app/actions/examsActions";

export default async function ExamsPage() {
  const { data } = await fetchExams();

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Avaliações" />
      </Titlebar.Root>

      <ExamsList data={data} />
    </>
  );
}
