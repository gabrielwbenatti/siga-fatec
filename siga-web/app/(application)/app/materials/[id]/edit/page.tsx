import { fetchMaterialById } from "@/app/actions/materialsActions";
import HomeMaterialsForm from "../../_components/MaterialsCreateUpdateForm";

export default async function HomeMaterialsIDEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const material = await fetchMaterialById(id);

  return <HomeMaterialsForm isEditMode={true} initialData={material} />;
}
