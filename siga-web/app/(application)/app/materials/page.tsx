import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { ArrowDownUp } from "lucide-react";
import { fetchClassMaterials } from "@/app/actions/materialsActions";
import MaterialsList from "./_components/MaterialsList";
import { Titlebar } from "@/components/SiGA/Titlebar";

export default async function HomeMaterialsPage() {
  const { data } = await fetchClassMaterials();

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Materiais de Aula" />
        <Titlebar.Actions>
          <a href={ROUTES.MATERIALS.REORDER}>
            <Button variant="secondary">
              <ArrowDownUp /> Reordenar
            </Button>
          </a>

          <a href={ROUTES.MATERIALS.CREATE}>
            <Button>Novo</Button>
          </a>
        </Titlebar.Actions>
      </Titlebar.Root>

      <MaterialsList data={data} />
    </>
  );
}
