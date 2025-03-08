import ClassMaterial from "@/types/ClassMaterial";
import HomeMaterialsListItem from "./MaterialsListItem";

export default function MaterialsList({ data }: { data: ClassMaterial[] }) {
  return (
    <div className="flex flex-col divide-y">
      {data.length === 0 ? (
        <div>Nenhuma informação para exibir.</div>
      ) : (
        data?.map((material) => (
          <HomeMaterialsListItem material={material} key={material.id!} />
        ))
      )}
    </div>
  );
}
