"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { CircleChevronRight } from "lucide-react";

const HomePlanningPage = () => {
  const data = [
    {
      id: 1,
      title: "Aula Inaugural",
      description: "",
      planned_date: "10/02/2025",
    },
    {
      id: 2,
      title: "Apresentações",
      description: "",
      planned_date: "17/02/2025",
    },
    { id: 3, title: "Seminário", description: "", planned_date: "24/02/2025" },
    { id: 4, title: "Conclusão", description: "", planned_date: "03/03/2025" },
  ];

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Planejamento</h1>
        <a href={ROUTES.PLANNING.CREATE}>
          <Button>Novo</Button>
        </a>
      </div>

      <div className="flex flex-col divide-y">
        {data.map((e, i) => (
          <div
            className="flex w-full items-center justify-between rounded-lg px-2 py-3 hover:bg-primary/10"
            key={i}
          >
            <div className="flex flex-col">
              <span className="text-sm">{e.planned_date}</span>
              <a href="#" className="font-bold">
                {e.title}
              </a>
              <span className="text-sm">{e.description || e.title}</span>
            </div>

            <a href="#">
              <Button variant="outline" size="icon">
                <CircleChevronRight />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePlanningPage;
