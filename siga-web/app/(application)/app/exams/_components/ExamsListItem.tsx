import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import Exam from "@/types/Exam";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface ExamsListItemProps {
  exam: Exam;
}

const ExamsListItem: FC<ExamsListItemProps> = ({
  exam,
}: ExamsListItemProps) => {
  return (
    <li className="flex items-center justify-between rounded-lg border p-2 shadow-sm">
      <Link href={ROUTES.EXAMS.EDIT(exam.id!)}>{exam.title}</Link>

      <div className="flex gap-1.5">
        <Link href={ROUTES.EXAMS.EDIT(exam.id!)}>
          <Button variant="outline">
            <Pencil /> Editar
          </Button>
        </Link>

        <Button variant="destructive">
          <Trash2 />
        </Button>
      </div>
    </li>
  );
};

export default ExamsListItem;
