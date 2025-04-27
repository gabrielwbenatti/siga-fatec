import { Titlebar } from "@/components/SiGA/Titlebar";
import CopyPlanList from "./_components/CopyPlanList";
import TooltipIcon from "@/components/SiGA/TooltipIcon";

export default function CopyPlanPage() {
  return (
    <>
      <Titlebar.Root>
        <TooltipIcon content="Duplica o planejamento de uma disciplina já finalizada.">
          <Titlebar.Title title="Copiar Plano" />
        </TooltipIcon>
      </Titlebar.Root>

      <CopyPlanList />
    </>
  );
}
