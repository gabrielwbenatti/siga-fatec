"use client";

import { Button } from "@/components/ui/button";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassMaterial from "@/types/ClassMaterial";
import { DownloadCloudIcon } from "lucide-react";
import { useEffect, useState } from "react";

const HomeMaterialsPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
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
    return <div>Carregando....</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Materiais de Aula</h1>
        <a href={ROUTES.MATERIALS.CREATE}>
          <Button>Novo</Button>
        </a>
      </div>

      <div className="flex flex-col divide-y">
        {data?.map((e, i) => (
          <div
            className="flex items-center justify-between rounded-lg p-2 hover:bg-primary/10"
            key={i}
          >
            <div className="flex flex-col gap-1.5">
              <span>{e.title}</span>
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
