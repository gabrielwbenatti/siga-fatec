import StudentsList from "./_components/StudentsList";
import { Titlebar } from "@/components/SiGA/Titlebar";

export default async function StudentsPage() {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Alunos" />
      </Titlebar.Root>

      <StudentsList />
    </>
  );
}
