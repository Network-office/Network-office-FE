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

export default useDurationOpen
