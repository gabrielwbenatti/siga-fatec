import { Titlebar } from "@/components/SiGA/Titlebar";
import ExamsList from "./_components/ExamsList";
import { fetchExams } from "@/app/actions/examsActions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";

export default async function ExamsPage() {
  const { data } = await fetchExams();

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Avaliações" />

        <Titlebar.Actions>
          <Link href={ROUTES.EXAMS.CREATE}>
            <Button>Novo</Button>
          </Link>
        </Titlebar.Actions>
      </Titlebar.Root>

      <ExamsList data={data} />
    </>
  );
}
