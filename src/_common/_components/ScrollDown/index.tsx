import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"
import React, { forwardRef, useEffect, useRef } from "react"

export interface ScrollDownProps {
  children: React.ReactNode
  className?: string
}

const ScrollDown = forwardRef<HTMLDivElement, ScrollDownProps>(
  ({ children, className }, ref) => {
    const [clicked, setClicked] = React.useState(false)
    const bottomRef = ref as React.MutableRefObject<HTMLDivElement | null>

    useEffect(() => {
      if (clicked) {
        setClicked(false)
        if (bottomRef && bottomRef.current) {
          bottomRef.current.scrollIntoView({ behavior: "smooth" })
        }
      }
    }, [clicked, bottomRef])

    return (
      <div className="relative">
        {children}
        <ChevronDownIcon
          onClick={() => setClicked(true)}
          className={cn(
            "fixed bottom-5 right-5 rounded-full shadow-lg w-8 h-8 bg-slate-200",
            className
          )}
        />
      </div>
    )
  }
)

ScrollDown.displayName = "ScrollDown"

export default ScrollDown
