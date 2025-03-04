"use client";

import { Button } from "@/components/ui/button";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassMaterial from "@/types/ClassMaterial";
import { ArrowDownUp } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import HomeMaterialsListItem from "./components/ListItem";

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
        setReordering(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadClassMaterialsData();
  }, []);

  // const moveItem = (dragIndex: number, hoverIndex: number) => {
  //   if (!data) return;

  //   console.log(dragIndex);
  //   console.log(hoverIndex);

  //   const draggedItem = data[dragIndex];
  //   const newItems = [...data];

  //   newItems.splice(dragIndex, 1);
  //   newItems.splice(hoverIndex, 0, draggedItem);
  //   newItems.map((e, i) => (e.list_index = i));

  //   setData(newItems);
  // };

  const handleDelete = async (id: number) => {
    await api.delete(`/classes/materials/${id}`).then((res) => {
      if (res.status !== 200) return;

      toast.success("Item removido com sucesso");
    });

    const res = await api.get("/classes/materials");
    setData(res.data);
  };

  const handleDownload = (id: number) => {
    console.log(id);
    toast.info("Em breve");
  };

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Materiais de Aula</h1>
        <div className="flex gap-1.5">
          <Button
            variant="secondary"
            onClick={() => {
              toast.info("Em breve");
              // setReordering(!reordering);
            }}
          >
            <ArrowDownUp /> Reordenar
          </Button>

          <a href={ROUTES.MATERIALS.CREATE}>
            <Button>Novo</Button>
          </a>
        </div>
      </div>

      {data?.length === 0 ? (
        <div>Nenhuma informação para ser exibida.</div>
      ) : (
        <div className="flex flex-col divide-y">
          {reordering
            ? data?.map((e, i) => (
                <div
                  className="flex select-none items-center rounded-lg p-2"
                  key={i}
                >
                  {`(${e.list_index}) - ${e.title}`}
                </div>
              ))
            : data?.map((material) => (
                <HomeMaterialsListItem
                  material={material}
                  key={material.id!}
                  onDelete={handleDelete}
                  onDownload={handleDownload}
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default HomeMaterialsPage;
