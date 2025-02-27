"use client";

import { Button } from "@/components/ui/button";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassPlan from "@/types/ClassPlan";
import { formatDate } from "@/utils/string_helper";
import { ListCheck, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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
          {data?.map((e, i) => (
            <div
              className="flex w-full items-center justify-between rounded-lg px-2 py-3 hover:bg-primary/10"
              key={i}
            >
              <div className="flex flex-col">
                <span className="text-sm">
                  {formatDate(e.planned_date, "pt-BR")}
                </span>
                <a href={`${ROUTES.PLANS.EDIT(e.id!)}`} className="font-bold">
                  {e.title}
                </a>
                <span className="text-sm">{e.description || e.title}</span>
              </div>

              <div className="flex gap-1">
                <Button
                  variant="outline"
                  onClick={() => toast.info("Em breve")}
                >
                  <ListCheck /> Registrar Presenças
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(e.id!)}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePlansPage;
