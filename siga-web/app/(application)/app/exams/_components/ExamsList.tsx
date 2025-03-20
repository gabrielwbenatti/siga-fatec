import Exam from "@/types/Exam";
import ExamsListItem from "./ExamsListItem";
import { FC } from "react";

interface ExamsListProps {
  data: Exam[];
}

const ExamsList: FC<ExamsListProps> = ({ data }: ExamsListProps) => {
  return (
    <div className="px-4">
      <span className="mb-4 block text-sm text-gray-500">
        {`${data.length} ${data.length === 1 ? "avaliação" : "avaliações"}`}
      </span>

      {data.length === 0 ? (
        <div>Nenhuma informação para exibir.</div>
      ) : (
        <ul className="flex flex-col gap-3">
          {data?.map((exam) => <ExamsListItem exam={exam} key={exam.id!} />)}
        </ul>
      )}
    </div>
  );
};

export default ExamsList;
