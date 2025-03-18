import ClassMaterial from "@/types/ClassMaterial";
import HomeMaterialsListItem from "./MaterialsListItem";

export default function MaterialsList({ data }: { data: ClassMaterial[] }) {
  return (
    <div className="flex flex-col divide-y px-4">
      <span className="mb-4 block text-sm text-gray-500">
        {`${data.length} ${data.length === 1 ? "material" : "materiais"}`}
      </span>

      {data.length === 0 ? (
        <div>Nenhuma informação para exibir.</div>
      ) : (
        <div className="flex flex-col gap-3">
          {data?.map((material) => (
            <HomeMaterialsListItem material={material} key={material.id!} />
          ))}
        </div>
      )}
    </div>
  );
}
