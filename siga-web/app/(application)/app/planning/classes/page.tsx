import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { Titlebar } from "@/components/SiGA/Titlebar";
import PlansList from "./_components/PlansList";

const HomePlansPage = async () => {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Planejar Aulas" />
        <Titlebar.Actions>
          <a href={ROUTES.PLANNING.CLASSES.CREATE}>
            <Button>Novo</Button>
          </a>
        </Titlebar.Actions>
      </Titlebar.Root>

      <PlansList />
    </>
  );
};

export default HomePlansPage;
