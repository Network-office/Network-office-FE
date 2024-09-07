"use client"

import { useFunnel } from "@/_common/_hooks/useFunnel"
import MeetingTitleInput from "./_components/_funnels/MeetingTitleInput"
import MeetingCategory from "./_components/_funnels/MeetingCategory"
import CreateMeetingFunnelHeader from "./_components/CreateMeetingFunnelHeader"

const CreateMeeting = () => {
  const { Funnel, setStep, popStep, step } = useFunnel(
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
      <CreateMeetingFunnelHeader
        popStepHandler={popStep}
        nowStep={step}
      />
      <Funnel>
        <Funnel.Step name="title">
          <MeetingTitleInput onNextStep={() => setStep("category")} />
        </Funnel.Step>
        <Funnel.Step name="category">
          <MeetingCategory onNextStep={() => setStep("category")} />
        </Funnel.Step>
      </Funnel>
    </div>
  )
}

export default CreateMeeting
