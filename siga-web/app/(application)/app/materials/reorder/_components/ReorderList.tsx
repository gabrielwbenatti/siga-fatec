"use client";

import { FC, useEffect, useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ClassMaterial from "@/types/ClassMaterial";
import { Button } from "@/components/ui/button";
import {
  fetchClassMaterials,
  reorderClassMaterial,
} from "@/app/actions/materialsActions";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import SortableItem from "./ReorderSortableItem";
import { toast } from "sonner";

const ReorderList: FC = () => {
  const router = useRouter();
  const [data, setData] = useState<ClassMaterial[]>([]);
  const [items, setItems] = useState<
    { id: string; title: string; list_index?: number }[]
  >([]);
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

  useEffect(() => {
    setItems(
      data.map((e) => ({
        id: String(e.id),
        title: e.title,
        list_index: e.list_index,
      })),
    );
  }, [data]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    if (active.id !== over.id) {
      setItems((materials) => {
        const oldIndex = materials.findIndex((m) => m.id === active.id);
        const newIndex = materials.findIndex((m) => m.id === over.id);

        const sortedArray = arrayMove(materials, oldIndex, newIndex).map(
          (m, i) => ({ ...m, list_index: i }),
        );

        return sortedArray;
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor),
  );

  return (
    <div className="w-full space-y-3 overflow-clip px-4">
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <span className="mb-4 block text-sm text-gray-500">
            Clique e arraste para reordenar
          </span>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items.map((m) => m.id)}
              strategy={verticalListSortingStrategy}
            >
              <ul className="flex flex-col gap-3">
                {items.map((m, i) => (
                  <SortableItem
                    key={m.id}
                    material={{
                      id: m.id,
                      title: m.title,
                      list_index: i + 1,
                    }}
                  />
                ))}
              </ul>
            </SortableContext>
          </DndContext>

          <div className="flex">
            <Button
              onClick={async () => {
                const result = await reorderClassMaterial(items);
                if (result.success) {
                  router.push(ROUTES.MATERIALS.LIST);
                }
              }}
            >
              Salvar
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ReorderList;
