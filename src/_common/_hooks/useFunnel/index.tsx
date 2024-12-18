"use client"

import { useEffect, useState } from "react"

import Funnel from "./_component/Funnel"
import Step from "./_component/Step"
import { FunnelProps } from "./types"

export const useFunnel = (steps: string[], defaultStep: string = steps[0]) => {
  const [step, setStep] = useState(defaultStep)

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      const newStep = params.get("step")
      if (newStep && steps.includes(newStep)) {
        setStep(newStep)
      } else {
        setStep(defaultStep)
      }
    }
    window.addEventListener("popstate", handlePopState)
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [steps, defaultStep])

  const pushStep = () => {
    if (step === steps[steps.length - 1]) {
      return
    }
    const nowIndex = steps.indexOf(step)
    setFunnel(steps[nowIndex + 1])
  }

  const popStep = () => {
    if (step === steps[0]) {
      return
    }
    const nowIndex = steps.indexOf(step)
    setFunnel(steps[nowIndex - 1])
  }

  const setFunnel = (nextFunnel: string) => {
    setStep(nextFunnel)
  }

  const FunnelComponent = Object.assign(
    function RouteFunnel({ children }: Omit<FunnelProps, "step">) {
      return <Funnel step={step}>{children}</Funnel>
    },
    { Step }
  )

  return {
    Funnel: FunnelComponent,
    setStep: setFunnel,
    pushStep,
    popStep,
    step
  } as const
}
