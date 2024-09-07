"use client"

import { useFunnel } from "@/_common/_hooks/useFunnel"
import MeetingTitleInput from "./_components/_funnels/MeetingTitleInput"

const CreateMeeting = () => {
  const { Funnel, setStep } = useFunnel(
    [
      "title",
      "category",
      "place",
      "activityTime",
      "personnel",
      "detail",
      "finish"
    ],
    "title"
  )
  return (
    <div>
      <Funnel>
        <Funnel.Step name="title">
          <MeetingTitleInput onNextStep={() => setStep("category")} />
        </Funnel.Step>
        <Funnel.Step name="category">
          <p></p>
        </Funnel.Step>
      </Funnel>
    </div>
  )
}

export default CreateMeeting
