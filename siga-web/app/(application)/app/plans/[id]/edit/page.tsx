import { fetchClassPlanById } from "@/app/actions/plansActions";
import PlansForm from "../../components/PlansForm";
import TitleBar from "@/components/SiGA/TitleBar";

const HomePlansIDEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const plan = await fetchClassPlanById(id);

  return (
    <>
      <TitleBar title={plan.title} />
      <PlansForm isEditMode={true} initialData={plan} />
    </>
  );
};

export default HomePlansIDEditPage;
