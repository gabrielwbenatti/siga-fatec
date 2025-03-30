import { Titlebar } from "@/components/SiGA/Titlebar";
import ReorderList from "./_components/ReorderList";

export default async function HomeMaterialsReorderPage() {
  return (
    <div className="space-y-4">
      <Titlebar.Root>
        <Titlebar.Title title="Reordenação de conteúdo" />
      </Titlebar.Root>

      <ReorderList />
    </div>
  );
}
