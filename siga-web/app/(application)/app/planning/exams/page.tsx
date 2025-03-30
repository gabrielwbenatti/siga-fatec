import { Titlebar } from "@/components/SiGA/Titlebar";
import ExamsList from "./_components/ExamsList";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";

export default async function ExamsPage() {
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

      <ExamsList />
    </>
  );
}
