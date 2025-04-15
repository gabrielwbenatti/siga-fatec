import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

interface Props {
  children: React.ReactNode;
  trigger?: string;
  content: string;
}

const TooltipIcon = ({ children, trigger, content }: Props) => {
  return (
    <>
      <div className="flex items-center">
        <span className="pr-2">{children}</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {trigger || <InfoIcon className="size-3" />}
            </TooltipTrigger>
            <TooltipContent>{content}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default TooltipIcon;
