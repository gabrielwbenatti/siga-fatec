"use client";

import RowWrapper from "@/components/SiGA/RowWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import ClassPlan from "@/types/ClassPlan";
import { formatDate } from "@/utils/string_helper";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { toast } from "sonner";

interface HomePlansListItemProps {
  plan: ClassPlan;
}

const PlansListItem: FC<HomePlansListItemProps> = ({
  plan,
}: HomePlansListItemProps) => {
  const handleDelete = (plan: ClassPlan) => {
    if (plan.applied_date) {
      toast.warning("Não permite exclusão, já possui chamada");
      return;
    }

    toast.info("Em breve");
  };

  return (
    <div className="flex w-full items-center justify-between rounded-lg border px-2 py-3 shadow-sm hover:bg-primary/10">
      <div className="flex flex-col">
        <span className="text-sm">
          {formatDate(plan.planned_date, "pt-BR")}
        </span>
        <RowWrapper>
          <a
            href={`${ROUTES.PLANNING.CLASSES.EDIT(plan.id!)}`}
            className="flex items-center font-bold"
          >
            {plan.title}
          </a>
          {plan.applied_date && (
            <Badge className="bg-green-600 hover:bg-green-700">{`Lecionado em ${formatDate(plan.applied_date, "pt-BR")}`}</Badge>
          )}
        </RowWrapper>

        <span className="text-sm">{plan.description || plan.title}</span>
      </div>

      <div className="flex gap-1">
        <Link href={ROUTES.PLANNING.CLASSES.EDIT(plan.id!)}>
          <Button variant="outline">
            <Pencil /> Ediar
          </Button>
        </Link>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => handleDelete(plan)}
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};

export default PlansListItem;
