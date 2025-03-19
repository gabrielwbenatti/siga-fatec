import { Titlebar } from "@/components/SiGA/Titlebar";
import PlansForm from "../components/PlansForm";

const HomePlansPage = () => {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Criar Novo Planejamento" />
      </Titlebar.Root>
      <PlansForm isEditMode={false} />;
    </>
  );
};

export default HomePlansPage;
