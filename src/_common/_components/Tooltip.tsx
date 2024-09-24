import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as ShadcnTooltip
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { TooltipArrow } from "@radix-ui/react-tooltip"
import { PropsWithChildren, ReactNode, useEffect, useState } from "react"

interface TooltipProps extends PropsWithChildren<{}> {
  content: ReactNode
  side: "top" | "right" | "bottom" | "left" | undefined
  sideOffset?: number
  arrow?: boolean
  autoOpen?: boolean
  openDuration?: number
  onOpenChange?: (open: boolean) => void
  className?: string
  arrowClassName?: string
}

const Tooltip = ({
  children,
  content,
  side,
  sideOffset,
  arrow = false,
  autoOpen = false,
  openDuration = 1000,
  className,
  arrowClassName,
  onOpenChange
}: TooltipProps) => {
  const [show, setShow] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (autoOpen) {
      setShow(true)
      setTimeout(() => {
        setShow(undefined)
      }, openDuration)
    }
  }, [autoOpen, openDuration])

  const handleTriggerClick = () => {
    setShow((prev) => (prev ? undefined : true))
  }

  return (
    <TooltipProvider>
      <ShadcnTooltip
        open={show}
        onOpenChange={onOpenChange}>
        <TooltipTrigger onClick={handleTriggerClick}>{children}</TooltipTrigger>
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
