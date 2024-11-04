import useInfiniteScroll from "@/_common/_hooks/useInfiniteScroll"
import { useEffect, useState } from "react"

const useChatScroll = (dependencies: unknown[]) => {
  const [scrollDown, setScrollDown] = useState(false)

  const { ref: bottomRef } = useInfiniteScroll(() => setScrollDown(true), {
    threshold: 1.0
  })

  useEffect(() => {
    if (bottomRef.current) {
      if (scrollDown) {
        bottomRef.current.scrollIntoView({ behavior: "smooth" })
        setScrollDown(false)
      }
    }
  }, [scrollDown, bottomRef, ...dependencies])

  return { bottomRef }
}

export default useChatScroll
