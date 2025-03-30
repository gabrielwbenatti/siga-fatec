"use client";

import { fetchClassPlans } from "@/app/actions/plansActions";
import ClassPlan from "@/types/ClassPlan";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import AttendanceListItem from "./AttendanceListItem";

const AttendanceList = () => {
  const [data, setData] = useState<ClassPlan[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await fetchClassPlans();

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
        <span>Carregando...</span>
      ) : (
        <>
          <span className="mb-4 block text-sm text-gray-500">
            {`${data.length} ${data.length === 1 ? "planejamento" : "planejamentos"}`}
          </span>
          {data.length === 0 ? (
            <div>Nenhuma informação para exibir.</div>
          ) : (
            <div className="flex flex-col gap-3">
              {data.map((plan) => (
                <AttendanceListItem plan={plan} key={plan.id} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AttendanceList;
