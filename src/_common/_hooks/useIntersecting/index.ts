import { useEffect, useRef } from "react"

const useIntersecting = (
  handleAuto: (isInterSect: boolean) => void,
  options: IntersectionObserverInit
) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let intersectionCount = 0
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectionCount++
          } else if (intersectionCount > 0) {
            intersectionCount--
          }
          handleAuto(intersectionCount > 0)
        })
      },
      options || { threshold: 0.5 }
    )

    const target = ref && ref.current

    if (!target) return

    observer.observe(target)

    return () => observer.unobserve(target)
  }, [options])

  return { ref }
}

export default useIntersecting
