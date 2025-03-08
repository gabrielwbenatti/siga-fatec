import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { ArrowDownUp } from "lucide-react";
import { fetchClassMaterials } from "@/app/actions/materialsActions";
import MaterialsList from "./components/MaterialsList";

export default async function HomeMaterialsPage() {
  const { data } = await fetchClassMaterials();

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Materiais de Aula</h1>
        <div className="flex gap-1.5">
          <Button variant="secondary">
            <ArrowDownUp /> Reordenar
          </Button>

          <a href={ROUTES.MATERIALS.CREATE}>
            <Button>Novo</Button>
          </a>
        </div>
      </div>

      <MaterialsList data={data} />
    </div>
  );
}
