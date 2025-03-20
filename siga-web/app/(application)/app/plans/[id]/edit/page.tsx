import { fetchClassPlanById } from "@/app/actions/plansActions";
import PlansForm from "../../_components/PlansCreateUpdateForm";
import { Titlebar } from "@/components/SiGA/Titlebar";
const HomePlansIDEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const plan = await fetchClassPlanById(id);

  return (
    <>
      <Titlebar.Root>
        <Titlebar.Title title={plan.title} />
      </Titlebar.Root>

      <PlansForm isEditMode={true} initialData={plan} />
    </>
  );
};

export default HomePlansIDEditPage;
