import { fetchClassPlanById } from "@/app/actions/classPlansActions";
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
