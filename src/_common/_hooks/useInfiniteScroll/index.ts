"use client"

import { useEffect, useRef } from "react"

const useInfiniteScroll = (
  onRefetch: () => void,
  options?: IntersectionObserverInit
) => {
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onRefetch()),
      options || { threshold: 0.5 }
    )

    const target = ref && ref.current

    if (!target) return

    observer.observe(target)

    return () => observer.unobserve(target)
  }, [onRefetch, options])

  return { ref }
}

export default useInfiniteScroll
