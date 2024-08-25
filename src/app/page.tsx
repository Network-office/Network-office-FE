"use client"

import { useFunnel } from "@/_common/_hooks/useFunnel"

export default function Home() {
  const [Funnel, setStep, step] = useFunnel(["funnel1", "funnel2", "funnel3"])

  return (
    <main>
      <Funnel>
        <Funnel.Step name="funnel1">
          <p>지금은 {step} Funnel</p>
          <button onClick={() => setStep("funnel2")}>다음 퍼널로</button>
        </Funnel.Step>
        <Funnel.Step name="funnel2">
          <p>지금은 {step} Funnel</p>
          <button onClick={() => setStep("funnel3")}>다음 퍼널로</button>
        </Funnel.Step>
        <Funnel.Step name="funnel3">
          <p>지금은 {step} Funnel</p>
          <button onClick={() => setStep("funnel3")}>다음 퍼널로</button>
        </Funnel.Step>
      </Funnel>
    </main>
  )
}
