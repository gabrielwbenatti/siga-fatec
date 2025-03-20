import { fetchClassMaterials } from "@/app/actions/materialsActions";
import { Titlebar } from "@/components/SiGA/Titlebar";
import ReorderList from "./_components/ReorderList";

export default async function HomeMaterialsReorderPage() {
  const { data } = await fetchClassMaterials();

  return (
    <div className="space-y-4">
      <Titlebar.Root>
        <Titlebar.Title title="Reordenação de conteúdo" />
      </Titlebar.Root>

      <ReorderList data={data} />
    </div>
  );
}
