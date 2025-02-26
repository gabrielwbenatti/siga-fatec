"use client";

import { Button } from "@/components/ui/button";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassPlan from "@/types/ClassPlan";
import { CircleChevronRight, ListCheck } from "lucide-react";
import { useEffect, useState } from "react";

const HomePlanningPage = () => {
  const [loading, setLoding] = useState<boolean>(true);
  const [data, setData] = useState<ClassPlan[] | null>(null);

  useEffect(() => {
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
    loadClassPlansData();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Planejamento</h1>
        <a href={ROUTES.PLANNING.CREATE}>
          <Button>Novo</Button>
        </a>
      </div>

      {data?.length === 0 ? (
        <div>Nenhuma informação para ser exibida.</div>
      ) : (
        <div className="flex flex-col divide-y">
          {data?.map((e, i) => (
            <div
              className="hover:bg-primary/10 flex w-full items-center justify-between rounded-lg px-2 py-3"
              key={i}
            >
              <div className="flex flex-col">
                <span className="text-sm">{e.planned_date?.toString()}</span>
                <a href="#" className="font-bold">
                  {e.title}
                </a>
                <span className="text-sm">{e.description || e.title}</span>
              </div>

              <div className="flex gap-1">
                <a href={ROUTES.PLANNING.ATTENDACE}>
                  <Button variant="outline">
                    <ListCheck /> Registrar Presenças
                  </Button>
                </a>
                <a href="#">
                  <Button variant="outline" size="icon">
                    <CircleChevronRight />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePlanningPage;
