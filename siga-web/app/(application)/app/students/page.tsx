import { fetchStudents } from "@/app/actions/studentsAction";
import TitleBar from "@/components/SiGA/TitleBar";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default async function StudentsPage() {
  const { data } = await fetchStudents();

  return (
    <>
      <TitleBar title="Alunos" />

      <div className="flex flex-col space-y-3 rounded-2xl p-4">
        <span>
          {`${data.length} ${data.length === 1 ? "aluno matriculado" : "alunos matriculados"}`}
        </span>

        <div className="divide-y">
          {data.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between bg-white px-3 py-2"
            >
              <span>{`${s.first_name} ${s.last_name}`}</span>
              <a href={`mailto:${s.user.email}`}>
                <Button size="icon" variant="secondary">
                  <Mail />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
