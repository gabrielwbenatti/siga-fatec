"use client";

import { FC, useState } from "react";
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
import { reorderClassMaterial } from "@/app/actions/materialsActions";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import SortableItem from "./ReorderSortableItem";

interface ReorderListProps {
  data: Array<ClassMaterial>;
}

const ReorderList: FC<ReorderListProps> = ({ data }: ReorderListProps) => {
  const [items, setItems] = useState(
    data.map((e) => ({
      id: String(e.id),
      title: e.title,
      list_index: e.list_index,
    })),
  );
  const router = useRouter();

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
                material={{ id: m.id, title: m.title, list_index: i + 1 }}
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
    </div>
  );
};

export default ReorderList;
