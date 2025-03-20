"use client";

import ClassPlan from "@/types/ClassPlan";
import PlansListItem from "./PlansListItem";
import { FC, useEffect, useState } from "react";
import { fetchClassPlans } from "@/app/actions/plansActions";
import { toast } from "sonner";

const PlansList: FC = () => {
  const [data, setData] = useState<ClassPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
                <PlansListItem key={plan.id} plan={plan} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PlansList;
