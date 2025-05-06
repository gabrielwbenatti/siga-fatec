import RowWrapper from "@/components/SiGA/RowWrapper";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import Exam from "@/types/Exam";
import { formatDate } from "@/utils/string_helper";
import { ArrowRightIcon } from "lucide-react";
import { FC } from "react";

interface Props {
  exam: Exam;
}

const GradesListItem: FC<Props> = ({ exam }: Props) => {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border px-2 py-3 shadow-sm hover:bg-primary/10">
      <div className="flex flex-col">
        <span className="text-sm">
          {formatDate(exam.planned_date, "pt-BR")}
        </span>
        <RowWrapper>
          <a
            href={ROUTES.EXECUTE.GRADES.EDIT(exam.id!)}
            className="flex items-center font-bold"
          >
            {exam.title}
          </a>
        </RowWrapper>
      </div>

      <Button variant="outline" className="ml-auto">
        <a
          href={ROUTES.EXECUTE.GRADES.EDIT(exam.id!)}
          className="flex items-center gap-1"
        >
          <ArrowRightIcon /> <span>Lançar notas</span>
        </a>
      </Button>
    </div>
  );
};

export default GradesListItem;
