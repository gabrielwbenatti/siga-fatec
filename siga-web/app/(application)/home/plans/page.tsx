import { ROUTES } from "@/config/routes";
import PlansList from "./components/PlansList";
import { Button } from "@/components/ui/button";
import { fetchClassPlans } from "@/app/actions/classPlansActions";

const HomePlansPage = async () => {
  const { data } = await fetchClassPlans();

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Planejamento</h1>
        <a href={ROUTES.PLANS.CREATE}>
          <Button>Novo</Button>
        </a>
      </div>

      <PlansList data={data} />
    </div>
  );
};

export default HomePlansPage;
