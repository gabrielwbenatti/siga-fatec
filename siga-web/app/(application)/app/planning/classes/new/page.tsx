import { Titlebar } from "@/components/SiGA/Titlebar";
import PlansCreateUpdateForm from "../_components/PlansCreateUpdateForm";

const HomePlansPage = () => {
  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title="Criar Nova Aula" />
      </Titlebar.Root>
      <PlansCreateUpdateForm />
    </>
  );
};

export default HomePlansPage;
