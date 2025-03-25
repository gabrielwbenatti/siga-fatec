import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Grip } from "lucide-react";
import { FC } from "react";

interface ReorderSortableItemProps {
  material: {
    id: string;
    title: string;
    list_index?: number;
  };
}

const ReorderSortableItem: FC<ReorderSortableItemProps> = ({
  material,
}: ReorderSortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: String(material.id) });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex items-center gap-2 rounded-lg border p-3 ${isDragging ? "font-bold shadow-lg" : "shadow-sm"}`}
    >
      <Grip className="text-gray-400" />
      {`(${material.list_index}) ${material.title}`}
    </li>
  );
};

export default ReorderSortableItem;
