"use client";

import { ClassesResponse } from "@/types/Class";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CopyPlanListItem from "./CopyPlanListItem";
import { fetchFinishedClassPlans } from "@/app/actions/classesActions";

const CopyPlanList = () => {
  const [data, setData] = useState<ClassesResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await fetchFinishedClassPlans();

      if (!result.success) {
        toast.error(result.error);
      }

      setData(result.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col px-4">
        {isLoading ? (
          <div>Carregando...</div>
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
                  <CopyPlanListItem key={plan.id} dataClass={plan} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CopyPlanList;
