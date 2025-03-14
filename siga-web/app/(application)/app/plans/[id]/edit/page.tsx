import { fetchClassPlanById } from "@/app/actions/plansActions";
import PlansForm from "../../components/PlansForm";

const HomePlansIDEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const plan = await fetchClassPlanById(id);

  return <PlansForm isEditMode={true} initialData={plan} />;
};

export default HomePlansIDEditPage;
