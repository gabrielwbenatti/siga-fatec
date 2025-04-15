import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

interface Props {
  children: React.ReactNode;
  tooltip?: string;
}

const Label = ({ children, tooltip }: Props) => {
  return (
    <label className="flex items-center font-medium">
      {children}
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="pl-2">
              <InfoIcon className="size-4" />
            </TooltipTrigger>
            <TooltipContent>{tooltip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </label>
  );
};

export default Label;
