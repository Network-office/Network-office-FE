import useIntersecting from "@/_common/_hooks/useIntersecting"
import { useEffect, useRef, useState } from "react"

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

  return { bottomRef }
}

export default useChatScroll
