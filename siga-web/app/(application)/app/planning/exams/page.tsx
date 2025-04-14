import { Titlebar } from "@/components/SiGA/Titlebar";
import ExamsList from "./_components/ExamsList";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import ExamsFormula from "./_components/ExamsFormula";
import { getClassById } from "@/app/actions/authActions";

export default async function ExamsPage() {
  const result = await getClassById();

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Avaliações" />

        <Titlebar.Actions>
          <Link href={ROUTES.PLANNING.EXAMS.CREATE}>
            <Button>Novo</Button>
          </Link>
        </Titlebar.Actions>
      </Titlebar.Root>

      <ExamsFormula initialData={result} />

      <ExamsList />
    </>
  );
}
