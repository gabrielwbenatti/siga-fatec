import Exam from "@/types/Exam";

interface ExamsListItemProps {
  exam: Exam;
}

const ExamsListItem = ({ exam }: ExamsListItemProps) => {
  return <li>{exam.title}</li>;
};

export default ExamsListItem;
