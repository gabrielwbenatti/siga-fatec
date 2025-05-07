import { Titlebar } from "@/components/SiGA/Titlebar";
import ExamSubmissionForm from "./_components/ExamSubmissionForm";

export default async function ExecuteGradesIDEditPage() {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Lançar notas" />
      </Titlebar.Root>

      <ExamSubmissionForm />
    </>
  );
}
