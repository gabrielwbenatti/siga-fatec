import TitleBar from "@/components/SiGA/TitleBar";
import ExamsList from "./_components/ExamsList";
import { fetchExams } from "@/app/actions/examsActions";

export default async function ExamsPage() {
  const { data } = await fetchExams();

  return (
    <>
      <TitleBar title="Avaliações" />

      <ExamsList data={data} />
    </>
  );
}
