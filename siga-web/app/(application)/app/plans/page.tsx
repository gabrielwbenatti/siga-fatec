import { ROUTES } from "@/lib/routes";
import PlansList from "./_components/PlansList";
import { Button } from "@/components/ui/button";
import { Titlebar } from "@/components/SiGA/Titlebar";

const HomePlansPage = async () => {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Planejamento" />
        <Titlebar.Actions>
          <a href={ROUTES.PLANS.CREATE}>
            <Button>Novo</Button>
          </a>
        </Titlebar.Actions>
      </Titlebar.Root>

      <PlansList />
    </>
  );
};

export default HomePlansPage;
