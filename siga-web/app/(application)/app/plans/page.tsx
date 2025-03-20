import { ROUTES } from "@/lib/routes";
import PlansList from "./_components/PlansList";
import { Button } from "@/components/ui/button";
import { fetchClassPlans } from "@/app/actions/plansActions";
import { Titlebar } from "@/components/SiGA/Titlebar";

const HomePlansPage = async () => {
  const { data } = await fetchClassPlans();

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

      <PlansList data={data} />
    </>
  );
};

export default HomePlansPage;
