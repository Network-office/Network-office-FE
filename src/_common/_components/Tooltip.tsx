import { TooltipProps } from "@/_common/_components/types"
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as ShadcnTooltip
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { TooltipArrow } from "@radix-ui/react-tooltip"
import { useEffect, useState } from "react"

const useDurationOpen = (
  defaultOpen: boolean,
  open: boolean | undefined,
  openDuration: number
) => {
  const [openState, setOpenState] = useState(open)

  useEffect(() => {
    if (!defaultOpen) return

    const timer = setTimeout(() => {
      setOpenState(false)
    }, openDuration)

    return () => clearTimeout(timer)
  }, [defaultOpen, openDuration])

  return openState
}

const Tooltip = ({
  children,
  content,
  side,
  sideOffset,
  arrow = false,
  defaultOpen = false,
  openDuration = 3000,
  open,
  className,
  arrowClassName,
  onOpenChange
}: TooltipProps) => {
  const durationOpen = useDurationOpen(defaultOpen, open, openDuration)

  return (
    <TooltipProvider>
      <ShadcnTooltip
        defaultOpen={defaultOpen}
        open={open || durationOpen}
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
