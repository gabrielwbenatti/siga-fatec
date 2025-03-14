import { ROUTES } from "@/lib/routes";
import PlansList from "./components/PlansList";
import { Button } from "@/components/ui/button";
import { fetchClassPlans } from "@/app/actions/plansActions";
import TitleBar from "@/components/SiGA/TitleBar";

const HomePlansPage = async () => {
  const { data } = await fetchClassPlans();

  return (
    <>
      <TitleBar title="Planejamento">
        <a href={ROUTES.PLANS.CREATE}>
          <Button>Novo</Button>
        </a>
      </TitleBar>

      <PlansList data={data} />
    </>
  );
};

export default HomePlansPage;
