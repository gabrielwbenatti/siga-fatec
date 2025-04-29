"use client";

import ClassPlan from "@/types/ClassPlan";
import PlansListItem from "./PlansListItem";
import { FC, useEffect, useState } from "react";
import { deleteClassPlan, fetchClassPlans } from "@/app/actions/plansActions";
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

  const handleDelete = async (planId: number | string) => {
    try {
      const result = await deleteClassPlan(planId);
      if (!result.success) {
        toast.error(result.error);
      }
      // Remove the deleted plan from the state
      setData((prev) => prev.filter((item) => item.id !== planId));
      toast.success("Planejamento deletado com sucesso!");
    } catch (error) {
      console.log("Erro ao deletar o planejamento:", error);
      toast.error("Erro ao deletar o planejamento.");
    }
  };

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
                <PlansListItem
                  key={plan.id}
                  plan={plan}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PlansList;
