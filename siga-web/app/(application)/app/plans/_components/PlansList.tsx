import ClassPlan from "@/types/ClassPlan";
import PlansListItem from "./PlansListItem";

const PlansList = ({ data }: { data: ClassPlan[] }) => {
  return (
    <div className="flex flex-col px-4">
      <span className="mb-4 block text-sm text-gray-500">
        {`${data.length} ${data.length === 1 ? "planejamento" : "planejamentos"}`}
      </span>

      {data.length === 0 ? (
        <div>Nenhuma informação para exibir.</div>
      ) : (
        <div className="flex flex-col gap-3">
          {data.map((plan) => (
            <PlansListItem key={plan.id} plan={plan} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlansList;
