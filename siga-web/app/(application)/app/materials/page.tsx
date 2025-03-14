import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { ArrowDownUp } from "lucide-react";
import { fetchClassMaterials } from "@/app/actions/materialsActions";
import MaterialsList from "./components/MaterialsList";
import TitleBar from "@/components/SiGA/TitleBar";

export default async function HomeMaterialsPage() {
  const { data } = await fetchClassMaterials();

  return (
    <>
      <TitleBar title="Materiais de Aula">
        <a href={ROUTES.MATERIALS.REORDER}>
          <Button variant="secondary">
            <ArrowDownUp /> Reordenar
          </Button>
        </a>

        <a href={ROUTES.MATERIALS.CREATE}>
          <Button>Novo</Button>
        </a>
      </TitleBar>

      <MaterialsList data={data} />
    </>
  );
}
