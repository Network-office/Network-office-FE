"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}>
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    orientation?: "vertical" | "horizontal"
    enableDrag?: boolean
  }
>(
  (
    {
      className,
      children,
      orientation = "vertical",
      enableDrag = false,
      ...props
    },
    ref
  ) => {
    const viewportRef = React.useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = React.useState(false)
    const [startX, setStartX] = React.useState(0)
    const [startY, setStartY] = React.useState(0)
    const [scrollLeft, setScrollLeft] = React.useState(0)
    const [scrollTop, setScrollTop] = React.useState(0)

    const handleMouseDown = (e: React.MouseEvent) => {
      if (!enableDrag) return
      setIsDragging(true)
      setStartX(e.pageX - (viewportRef.current?.offsetLeft || 0))
      setStartY(e.pageY - (viewportRef.current?.offsetTop || 0))
      setScrollLeft(viewportRef.current?.scrollLeft || 0)
      setScrollTop(viewportRef.current?.scrollTop || 0)
    }

    const handleMouseLeave = () => {
      setIsDragging(false)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging || !enableDrag) return
      e.preventDefault()
      const x = e.pageX - (viewportRef.current?.offsetLeft || 0)
      const y = e.pageY - (viewportRef.current?.offsetTop || 0)
      const walkX = (x - startX) * 2
      const walkY = (y - startY) * 2
      if (viewportRef.current) {
        viewportRef.current.scrollLeft = scrollLeft - walkX
        viewportRef.current.scrollTop = scrollTop - walkY
      }
    }

    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}>
        <ScrollAreaPrimitive.Viewport
          ref={viewportRef}
          className={cn(
            "h-full w-full rounded-[inherit]",
            enableDrag && "cursor-grab active:cursor-grabbing"
          )}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}>
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar orientation={orientation} />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    )
  }
)

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
