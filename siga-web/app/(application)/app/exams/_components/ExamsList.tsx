import Exam from "@/types/Exam";

interface ExamsListProps {
  data: Exam[];
}

const ExamsList = ({ data }: ExamsListProps) => {
  return (
    <div className="px-4">
      <span className="mb-4 block text-sm text-gray-500">
        {`${data.length} ${data.length === 1 ? "avaliação" : "avaliações"}`}
      </span>
    </div>
  );
};

export default ExamsList;
