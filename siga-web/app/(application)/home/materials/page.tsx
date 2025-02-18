"use client";

import { Button } from "@/components/ui/button";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassMaterial from "@/types/ClassMaterial";
import { ArrowDownUp, DownloadCloudIcon } from "lucide-react";
import { useEffect, useState } from "react";

const HomeMaterialsPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [reordering, setReordering] = useState<boolean>(false);
  const [data, setData] = useState<ClassMaterial[] | null>(null);

  useEffect(() => {
    async function loadClassMaterialsData() {
      try {
        setLoading(true);
        const res = await api.get("/classes/materials");
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadClassMaterialsData();
  }, []);

  if (loading) {
    return <div>loading....</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Materiais de Aula</h1>
        <div className="flex gap-1.5">
          <Button
            variant="secondary"
            onClick={() => setReordering(!reordering)}
          >
            <ArrowDownUp /> Reordenar
          </Button>

          <a href={ROUTES.MATERIALS.CREATE}>
            <Button>Novo</Button>
          </a>
        </div>
      </div>

      <div className="flex flex-col divide-y">
        {reordering
          ? data?.map((e, i) => (
              <div
                className="flex select-none items-center rounded-lg p-2"
                key={i}
              >
                <span className="p-2 text-gray-400 hover:cursor-pointer">
                  <ArrowDownUp className="size-5" />
                </span>
                <div>{e.title}</div>
              </div>
            ))
          : data?.map((e, i) => (
              <div
                className="flex items-center justify-between rounded-lg p-2 hover:bg-primary/10"
                key={i}
              >
                <div className="flex flex-col gap-1.5">
                  <a href={ROUTES.MATERIALS.EDIT(e.id!)}>{e.title}</a>
                  {e.description && (
                    <span className="text-sm">{e.description}</span>
                  )}
                </div>

                <Button variant="outline" size="icon">
                  <DownloadCloudIcon />
                </Button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default HomeMaterialsPage;
