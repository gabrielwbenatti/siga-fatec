"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import ClassPlan from "@/types/ClassPlan";
import { formatDate } from "@/utils/string_helper";
import { ListCheck, Trash2 } from "lucide-react";
import { FC } from "react";

interface HomePlansListItemProps {
  plan: ClassPlan;
  onDelete?: (id: number) => void;
}

const PlansListItem: FC<HomePlansListItemProps> = ({
  plan,
  onDelete,
}: HomePlansListItemProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border px-2 py-3 shadow-sm hover:bg-primary/10">
      <div className="flex flex-col">
        <span className="text-sm">
          {formatDate(plan.planned_date, "pt-BR")}
        </span>
        <a
          href={`${ROUTES.PLANS.EDIT(plan.id!)}`}
          className="flex items-center font-bold"
        >
          {plan.title}
          {plan.applied_date && (
            <Badge className="ms-2 bg-green-500 hover:bg-green-800">{`Lecionado em ${formatDate(plan.applied_date, "pt-BR")}`}</Badge>
          )}
        </a>
        <span className="text-sm">{plan.description || plan.title}</span>
      </div>

      <div className="flex gap-1">
        <a href={ROUTES.PLANS.ATTENDACE(plan.id!)}>
          <Button variant="outline">
            <ListCheck />
            <span>Presenças</span>
          </Button>
        </a>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => onDelete?.(plan.id!)}
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};

export default PlansListItem;
