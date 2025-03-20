"use client";

import Exam from "@/types/Exam";
import ExamsListItem from "./ExamsListItem";
import { FC, useEffect, useState } from "react";
import { fetchExams } from "@/app/actions/examsActions";
import { toast } from "sonner";

const ExamsList: FC = () => {
  const [data, setData] = useState<Exam[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await fetchExams();

      if (!result.success) {
        toast.error(result.error);
      }

      setData(result.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="px-4">
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <div>
          <span className="mb-4 block text-sm text-gray-500">
            {`${data.length} ${data.length === 1 ? "avaliação" : "avaliações"}`}
          </span>

          {data.length === 0 ? (
            <div>Nenhuma informação para exibir.</div>
          ) : (
            <ul className="flex flex-col gap-3">
              {data?.map((exam) => (
                <ExamsListItem exam={exam} key={exam.id!} />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ExamsList;
