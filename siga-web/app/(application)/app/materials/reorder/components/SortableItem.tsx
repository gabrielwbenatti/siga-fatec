import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Grip } from "lucide-react";
import { JSX } from "react";

interface SortableItemProps {
  material: { id: string; title: string; list_index?: number };
}

export default function SortableItem({
  material,
}: SortableItemProps): JSX.Element {
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
      className={`flex items-center gap-2 p-3 ${isDragging ? "bg-primary/10 font-bold" : ""}`}
    >
      <Grip className="text-gray-400" />
      {`(${material.list_index}) ${material.title}`}
    </li>
  );
}
