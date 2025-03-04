"use client";

import { Button } from "@/components/ui/button";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassPlan from "@/types/ClassPlan";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import HomePlansListItem from "./components/ListItem";

const HomePlansPage = () => {
  const [loading, setLoding] = useState<boolean>(true);
  const [data, setData] = useState<ClassPlan[] | null>(null);

  async function loadClassPlansData() {
    try {
      setLoding(true);
      const res = await api.get("/classes/plans");
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoding(false);
    }
  }

  useEffect(() => {
    loadClassPlansData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await api.delete(`/classes/plans/${id}`);
      if (res.status !== 200) {
        toast.warning(
          "Não foi possível excluir o planejamento, tente novamente mais tarde",
        );
      }

      toast.success("Item removido com sucesso");
      await loadClassPlansData();
    } catch (error) {
      toast.error("Ocorreu um erro ao excluir, tente novamente mais tarde");
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Planejamento</h1>
        <a href={ROUTES.PLANS.CREATE}>
          <Button>Novo</Button>
        </a>
      </div>

      {data?.length === 0 ? (
        <div>Nenhuma informação para ser exibida.</div>
      ) : (
        <div className="flex flex-col divide-y">
          {data?.map((plan) => (
            <HomePlansListItem
              plan={plan}
              key={plan.id!}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePlansPage;
