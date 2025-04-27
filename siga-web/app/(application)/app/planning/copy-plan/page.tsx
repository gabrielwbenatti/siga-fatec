import { Titlebar } from "@/components/SiGA/Titlebar";
import CopyPlanList from "./_components/CopyPlanList";

export default function CopyPlanPage() {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Copiar Plano" />
      </Titlebar.Root>

      <CopyPlanList />
    </>
  );
}
