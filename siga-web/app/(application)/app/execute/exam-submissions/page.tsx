import { fetchExamSubmissions } from "@/app/actions/examsActions";
import { Titlebar } from "@/components/SiGA/Titlebar";
import ExamSubmissionForm from "./_components/ExamSubmissionForm";

export default async function ExecuteGradesIDEditPage() {
  const result = await fetchExamSubmissions();

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Lançar notas" />
      </Titlebar.Root>

      <ExamSubmissionForm initialData={result.data} />
    </>
  );
}
