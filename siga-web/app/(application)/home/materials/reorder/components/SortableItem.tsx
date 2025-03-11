import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
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
      className={`p-3 ${isDragging ? "bg-primary/10 font-bold" : ""}`}
    >
      {`(${material.list_index}) ${material.title}`}
    </li>
  );
}
