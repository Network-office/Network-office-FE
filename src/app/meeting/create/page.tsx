"use client"

import { useFunnel } from "@/_common/_hooks/useFunnel"
import MeetingTitleInput from "./_components/_funnels/MeetingTitleInput"
import MeetingCategory from "./_components/_funnels/MeetingCategory"
import MeetingPlace from "./_components/_funnels/MeetingPlace"
import MeetingTimeInput from "./_components/_funnels/MeetingTime"
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
          <MeetingCategory onNextStep={() => setStep("place")} />
        </Funnel.Step>
        <Funnel.Step name="place">
          <MeetingPlace onNextStep={() => setStep("activityTime")} />
        </Funnel.Step>
        <Funnel.Step name="activityTime">
          <MeetingTimeInput onNextStep={() => setStep("category")} />
        </Funnel.Step>
      </Funnel>
    </div>
  )
}

export default CreateMeeting
