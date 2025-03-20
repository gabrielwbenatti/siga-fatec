import { fetchStudents } from "@/app/actions/studentsAction";
import StudentsList from "./_components/StudentsList";
import { Titlebar } from "@/components/SiGA/Titlebar";

export default async function StudentsPage() {
  const { data } = await fetchStudents();

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Alunos" />
      </Titlebar.Root>

      <StudentsList data={data} />
    </>
  );
}
