import { Titlebar } from "@/components/SiGA/Titlebar";
import PlansCreateUpdateForm from "../_components/PlansCreateUpdateForm";

const HomePlansPage = () => {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Criar Novo Planejamento" />
      </Titlebar.Root>
      <PlansCreateUpdateForm isEditMode={false} />;
    </>
  );
};

export default HomePlansPage;
