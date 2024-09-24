import { TooltipProps } from "@/_common/_components/types"
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as ShadcnTooltip
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { TooltipArrow } from "@radix-ui/react-tooltip"

const Tooltip = ({
  children,
  content,
  side,
  sideOffset,
  arrow = false,
  defaultOpen = false,
  open,
  className,
  arrowClassName,
  onOpenChange
}: TooltipProps) => {
  return (
    <TooltipProvider>
      <ShadcnTooltip
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          className={cn("bg-white", className)}
          side={side}
          sideOffset={sideOffset}>
          {arrow && (
            <TooltipArrow className={cn("fill-black", arrowClassName)} />
          )}
          {content}
        </TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  )
}

export default Tooltip
