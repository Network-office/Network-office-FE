"use client"
import { useEffect } from "react"

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_MOCKING === "enabled") {
        const init = async () => {
          const { worker } = await import("@/mock/browser")
          worker.start()
        }
        init()
      }
    }
  }, [])
  return null
}
