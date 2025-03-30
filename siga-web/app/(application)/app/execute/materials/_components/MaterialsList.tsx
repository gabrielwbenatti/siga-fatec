"use client";

import ClassMaterial from "@/types/ClassMaterial";
import MaterialsListItem from "./MaterialsListItem";
import { FC, useEffect, useState } from "react";
import { fetchClassMaterials } from "@/app/actions/materialsActions";
import { toast } from "sonner";

const MaterialsList: FC = () => {
  const [data, setData] = useState<ClassMaterial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await fetchClassMaterials();

      if (!result.success) {
        toast.error(result.error);
      }

      setData(result.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col divide-y px-4">
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <span className="mb-4 block text-sm text-gray-500">
            {`${data.length} ${data.length === 1 ? "material" : "materiais"}`}
          </span>
          {data.length === 0 ? (
            <div>Nenhuma informação para exibir.</div>
          ) : (
            <div className="flex flex-col gap-3">
              {data?.map((material) => (
                <MaterialsListItem material={material} key={material.id!} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MaterialsList;
