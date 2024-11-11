import ScrollDown, { ScrollDownProps } from "@/_common/_components/ScrollDown"
import useIntersecting from "@/_common/_hooks/useIntersecting"
import React, { useEffect, useRef, useState } from "react"

const useChatScroll = (dependencies: unknown[]) => {
  const [auto, setAuto] = useState(true)

  const { ref: bottomRef } = useIntersecting(
    (isInterSect) => setAuto(isInterSect),
    {
      threshold: 1.0
    }
  )

  useEffect(() => {
    if (bottomRef.current) {
      if (auto) {
        bottomRef.current.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [bottomRef, ...dependencies])

  const ScrollDownComponent = ({ children, ...props }: ScrollDownProps) => (
    <>
      {auto ? (
        children
      ) : (
        <ScrollDown
          {...props}
          ref={bottomRef}>
          {children}
        </ScrollDown>
      )}
    </>
  )

  const BottomDiv = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      {...props}
      ref={bottomRef}
    />
  )

  return { BottomDiv, ScrollDown: ScrollDownComponent }
}

export default useChatScroll
