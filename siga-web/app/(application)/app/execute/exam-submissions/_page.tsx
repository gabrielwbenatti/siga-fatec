import { Titlebar } from "@/components/SiGA/Titlebar";
import GradesList from "./_components/GradesList";

export default function ExecuteGradesPage() {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Notas" />
      </Titlebar.Root>

      <GradesList />
    </>
  );
}
