import { fetchClassMaterials } from "@/app/actions/materialsActions";
import TitleBar from "@/components/Siga/TitleBar";
import MaterialsReorderList from "./components/MaterialsReorderList";

export default async function HomeMaterialsReorderPage() {
  const { data } = await fetchClassMaterials();

  return (
    <>
      <TitleBar title="Reordenação de conteúdo" />

      <MaterialsReorderList data={data} />
    </>
  );
}
