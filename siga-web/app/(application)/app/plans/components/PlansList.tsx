import ClassPlan from "@/types/ClassPlan";
import PlansListItem from "./PlansListItem";

const PlansList = ({ data }: { data: ClassPlan[] }) => {
  return (
    <div className="flex flex-col divide-y p-4">
      {data.length === 0 ? (
        <div>Nenhuma informação para exibir.</div>
      ) : (
        <>
          {data.map((plan) => (
            <PlansListItem key={plan.id} plan={plan} />
          ))}
        </>
      )}
    </div>
  );
};

export default PlansList;
