"use client"

import { useForm } from "react-hook-form"
import { useFunnel } from "@/_common/_hooks/useFunnel"
import { FormProvider } from "react-hook-form"
import useCreateMeeting from "./_hooks/_mutations/useCreateMeeting"
import MeetingTitleInput from "./_components/_funnels/MeetingTitleInput"
import MeetingCategory from "./_components/_funnels/MeetingCategory"
import MeetingPlace from "./_components/_funnels/MeetingPlace"
import MeetingTimeInput from "./_components/_funnels/MeetingTime"
import CreateMeetingFunnelHeader from "./_components/CreateMeetingFunnelHeader"
import MeetingPeopleInput from "./_components/_funnels/MeetingPeopleInput"
import MeetingDetailInput from "./_components/_funnels/MeetingDetailInput"
import MeetingCreateSuccess from "./_components/_funnels/MeetingCreateSuccess"
import MeetingDateInput from "./_components/_funnels/MeetingDate"
import { CreateMeetingFormTypes } from "./types"

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
  const { mutate } = useCreateMeeting()

  const onSubmit = async (formData: CreateMeetingFormTypes) => {
    mutate(formData, {
      onSuccess: () => {
        setStep("finish")
      },
      onError: () => {
        alert("오류가 발생했습니다. 잠시후 다시 시도해주세요")
      }
    })
  }

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
          <MeetingDetailInput
            onNextStep={useFormMethod.handleSubmit(onSubmit)}
          />
        </Funnel.Step>
        <Funnel.Step name="finish">
          <MeetingCreateSuccess />
        </Funnel.Step>
      </Funnel>
    </FormProvider>
  )
}

export default CreateMeeting
