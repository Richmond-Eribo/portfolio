import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ColumnTooltipProps {
  value: string;
  maxWidth?: string;
  className?: string;
}

export const ColumnTooltip = ({
  value,
  maxWidth = "max-w-28",
  className,
}: ColumnTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <p
            className={cn(
              "text-ellipsis text-xs overflow-hidden text-nowrap cursor-pointer",
              maxWidth,
              className
            )}
          >
            {value}
          </p>
        </TooltipTrigger>

        <TooltipContent className="bg-white border-2 shadow-2xl">
          <p className="text-ellipsis text-base overflow-hidden text-nowrap text-muted-light-1000">
            {value}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
