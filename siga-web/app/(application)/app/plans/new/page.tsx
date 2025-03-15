import TitleBar from "@/components/SiGA/TitleBar";
import PlansForm from "../components/PlansForm";

const HomePlansPage = () => {
  return (
    <>
      <TitleBar title="Criar Novo Planejamento" />
      <PlansForm isEditMode={false} />;
    </>
  );
};

export default HomePlansPage;
