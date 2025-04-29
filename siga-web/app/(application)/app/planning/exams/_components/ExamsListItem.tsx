import RowWrapper from "@/components/SiGA/RowWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import Exam from "@/types/Exam";
import { formatDate } from "@/utils/string_helper";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

interface ExamsListItemProps {
  exam: Exam;
  onDelete?: (examId: number | string) => Promise<void>;
}

const ExamsListItem: FC<ExamsListItemProps> = ({
  exam,
  onDelete,
}: ExamsListItemProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    if (!exam.id || !onDelete) return;

    try {
      setIsLoading(true);
      onDelete?.(exam.id);
    } catch (error) {
      console.log("Erro ao deletar o exame:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li className="flex items-center justify-between rounded-lg border p-2 shadow-sm">
      <div className="flex flex-col">
        <span className="text-sm">
          {formatDate(exam.planned_date, "pt-BR")}
        </span>

        <RowWrapper>
          <Link href={ROUTES.PLANNING.EXAMS.EDIT(exam.id!)}>
            {`${exam.title} (${exam.abbreviation})`}
          </Link>
          {exam.applied_date && (
            <Badge className="bg-green-600 hover:bg-green-700">{`Aplicado em ${formatDate(exam.applied_date, "pt-BR")}`}</Badge>
          )}
        </RowWrapper>
      </div>

      <div className="flex gap-1.5">
        <Link href={ROUTES.PLANNING.EXAMS.EDIT(exam.id!)}>
          <Button variant="outline" disabled={isLoading}>
            <Pencil /> Editar
          </Button>
        </Link>

        <Button
          variant="destructive"
          disabled={isLoading}
          onClick={handleDelete}
        >
          <Trash2 />
        </Button>
      </div>
    </li>
  );
};

export default ExamsListItem;
