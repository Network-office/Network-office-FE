"use client"

import { useForm } from "react-hook-form"
import { useFunnel } from "@/_common/_hooks/useFunnel"
import { FormProvider } from "react-hook-form"
import MeetingTitleInput from "./_components/_funnels/MeetingTitleInput"
import MeetingCategory from "./_components/_funnels/MeetingCategory"
import MeetingPlace from "./_components/_funnels/MeetingPlace"
import MeetingTimeInput from "./_components/_funnels/MeetingTime"
import CreateMeetingFunnelHeader from "./_components/CreateMeetingFunnelHeader"
import MeetingPeopleInput from "./_components/_funnels/MeetingPeopleInput"
import MeetingDetailInput from "./_components/_funnels/MeetingDetailInput"
import MeetingCreateSuccess from "./_components/_funnels/MeetingCreateSuccess"
import MeetingDateInput from "./_components/_funnels/MeetingDate"

interface CreateMeetingFormTypes {
  title: string
  category: string
  place: string
  date: string
  startTime: number
  endTime: number
  peopleNumber: number
  detail: string
}

const CreateMeeting = () => {
  const useFormMethod = useForm<CreateMeetingFormTypes>({ mode: "onBlur" })
  const { Funnel, setStep, popStep, step } = useFunnel(
    [
      "title",
      "category",
      "place",
      "date",
      "activityTime",
      "personnel",
      "detail",
      "finish"
    ],
    "title"
  )

  return (
    <FormProvider {...useFormMethod}>
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
          <MeetingPlace onNextStep={() => setStep("date")} />
        </Funnel.Step>
        <Funnel.Step name="date">
          <MeetingDateInput onNextStep={() => setStep("activityTime")} />
        </Funnel.Step>
        <Funnel.Step name="activityTime">
          <MeetingTimeInput onNextStep={() => setStep("personnel")} />
        </Funnel.Step>
        <Funnel.Step name="personnel">
          <MeetingPeopleInput onNextStep={() => setStep("detail")} />
        </Funnel.Step>
        <Funnel.Step name="detail">
          <MeetingDetailInput onNextStep={() => setStep("finish")} />
        </Funnel.Step>
        <Funnel.Step name="finish">
          <MeetingCreateSuccess />
        </Funnel.Step>
      </Funnel>
    </FormProvider>
  )
}

export default CreateMeeting
