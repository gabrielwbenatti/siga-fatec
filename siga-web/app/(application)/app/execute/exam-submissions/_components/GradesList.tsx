"use client";

import Exam from "@/types/Exam";
import { useEffect, useState } from "react";
import GradesListItem from "./GradesListItem";
import { fetchExams } from "@/app/actions/examsActions";
import { toast } from "sonner";

const GradesList = () => {
  const [data, setData] = useState<Exam[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="space-y-4 px-4">
      {isLoading ? (
        <>
          <span>Carregando...</span>
        </>
      ) : (
        <>
          <span className="mb-4 block text-sm text-gray-500">
            {`${data.length} ${data.length === 1 ? "planejamento" : "planejamentos"}`}
          </span>
          {data.length === 0 ? (
            <div>Nenhuma informação para exibir.</div>
          ) : (
            <div className="flex flex-col gap-3">
              {data.map((exam) => (
                <GradesListItem exam={exam} key={exam.id} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GradesList;
