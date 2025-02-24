"use client";

import { Button } from "@/components/ui/button";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassMaterial from "@/types/ClassMaterial";
import { ArrowDownUp, DownloadCloudIcon, Trash2 } from "lucide-react";
import { FC, ReactNode, Ref, useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { toast } from "sonner";

interface DraggableItemProps {
  item: ClassMaterial;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}
const DraggableItem: FC<DraggableItemProps> = ({
  item,
  moveItem,
}: DraggableItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { ...item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag as unknown as Ref<HTMLDivElement>}
      className={`flex select-none items-center rounded-lg p-2 ${isDragging ? "opacity-50" : "opacity-100"}`}
      key={item.id}
    >
      <span className="p-2 text-gray-400 hover:cursor-pointer">
        <ArrowDownUp className="size-5" />
      </span>
      <div>{`(${item.list_index}) - ${item.title}`}</div>
    </div>
  );
};

interface DraggableAreaProps {
  children: ReactNode;
  onDrop: (item: ClassMaterial) => void;
}
const DraggableArea: FC<DraggableAreaProps> = ({
  children,
  onDrop,
}: DraggableAreaProps) => {
  const [{ isOver }, drop] = useDrop({
    accept: "ITEM",
    drop: (item: ClassMaterial) => onDrop(item),
    collect: (monitor) => ({ isOver: monitor.isOver() }),
  });

  return (
    <div
      ref={drop as unknown as Ref<HTMLDivElement>}
      className={`${isOver ? "bg-red-50" : "bg-blue-50"}`}
    >
      {children}
    </div>
  );
};

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

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    if (!data) return;

    console.log(dragIndex);
    console.log(hoverIndex);

    const draggedItem = data[dragIndex];
    const newItems = [...data];

    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, draggedItem);
    newItems.map((e, i) => (e.list_index = i));

    setData(newItems);
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/classes/materials/${id}`).then((res) => {
      if (res.status !== 200) return;

      toast("Item removido com sucesso", {
        position: "top-right",
      });
    });

    const res = await api.get("/classes/materials");
    setData(res.data);
  };

  if (loading) {
    return <div>loading....</div>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
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
          {reordering ? (
            <DraggableArea onDrop={() => {}}>
              {data?.map((e, i) => (
                <DraggableItem
                  item={{ ...e, list_index: i }}
                  moveItem={moveItem}
                  key={i}
                />
              ))}
            </DraggableArea>
          ) : (
            data?.map((e, i) => (
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

                <div className="flex gap-1.5">
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(e.id!)}
                  >
                    <Trash2 />
                  </Button>

                  <Button variant="outline" size="icon">
                    <DownloadCloudIcon />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default HomeMaterialsPage;
