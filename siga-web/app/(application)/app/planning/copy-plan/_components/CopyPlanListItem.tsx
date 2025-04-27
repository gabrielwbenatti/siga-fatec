import { duplicateClassPlan } from "@/app/actions/plansActions";
import { Button } from "@/components/ui/button";
import { ClassesResponse } from "@/types/Class";
import { ArrowRightIcon, HourglassIcon } from "lucide-react";
import { FC, useState } from "react";
import { toast } from "sonner";

interface Props {
  dataClass: ClassesResponse;
}

const CopyPlanListItem: FC<Props> = ({ dataClass }: Props) => {
  const [isHandleLoading, setIsHandleLoading] = useState<boolean>(false);

  const handleClick = async (oldClassId: number) => {
    try {
      setIsHandleLoading(true);
      const result = await duplicateClassPlan(oldClassId);
      if (!result.success) {
        toast.error("error");
        return;
      }
      toast.success("Plano duplicado com sucesso!");
    } finally {
      setIsHandleLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-between rounded-lg border bg-white px-2 py-3 shadow-sm hover:bg-primary/10">
      <div className="flex flex-col">
        <span className="text-sm">{`${dataClass.year} ${dataClass.semester}`}</span>
        <span>{`${dataClass.discipline.abbreviation} - ${dataClass.discipline.name}`}</span>
      </div>

      <div className="flex gap-1">
        <Button variant="outline" onClick={() => handleClick(dataClass.id)}>
          {isHandleLoading ? (
            <>
              <HourglassIcon /> Aguarde...
            </>
          ) : (
            <>
              <ArrowRightIcon /> Duplicar este plano
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CopyPlanListItem;
