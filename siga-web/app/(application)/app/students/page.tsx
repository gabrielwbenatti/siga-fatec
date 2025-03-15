import { fetchStudents } from "@/app/actions/studentsAction";
import TitleBar from "@/components/SiGA/TitleBar";
import StudentsList from "./components/StudentsList";

export default async function StudentsPage() {
  const { data } = await fetchStudents();

  return (
    <>
      <TitleBar title="Alunos" />

      <StudentsList data={data} />
    </>
  );
}
