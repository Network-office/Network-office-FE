"use client"

import { useForm, FormProvider } from "react-hook-form"
import { useFunnel } from "@/_common/_hooks/useFunnel"
import CreateClubFunnelHeader from "./_components/CreateClubFunnelHeader"
import ClubNameInput from "./_components/_funnels/ClubNameInput"
import ClubCategoryInput from "./_components/_funnels/ClubCategoryInput"
import ClubLocationInput from "./_components/_funnels/ClubLocationInput"
import ClubScheduleInput from "./_components/_funnels/ClubScheduleInput"
import ClubMemberLimitInput from "./_components/_funnels/ClubMemberLimitInput"
import ClubCreateSuccess from "./_components/_funnels/ClubCreateSuccess"
import useCreateClub from "./_hooks/_mutations/useCreateClub"
import { useToast } from "@/_common/_hooks/useToast"

const CreateClubPage = () => {
  const { Funnel, pushStep, popStep, step } = useFunnel([
    "name",
    "category",
    "location",
    "schedule",
    "memberLimit",
    "finish"
  ])
  const methods = useForm()
  const createClubMutation = useCreateClub()
  const { toast } = useToast()

  const onSubmit = (data: any) => {
    createClubMutation.mutate(data, {
      onSuccess: () => {
        pushStep()
      },
      onError: () => {
        toast({
          width: "260px",
          height: "80px",
          title: "오류",
          description: "동호회 생성 중 오류가 발생했습니다.",
          variant: "destructive"
        })
      }
    })
  }

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-white">
        <CreateClubFunnelHeader
          nowStep={step}
          popStep={popStep}
        />
        <Funnel>
          <Funnel.Step name="name">
            <ClubNameInput onNextStep={pushStep} />
          </Funnel.Step>
          <Funnel.Step name="category">
            <ClubCategoryInput onNextStep={pushStep} />
          </Funnel.Step>
          <Funnel.Step name="location">
            <ClubLocationInput onNextStep={pushStep} />
          </Funnel.Step>
          <Funnel.Step name="schedule">
            <ClubScheduleInput onNextStep={pushStep} />
          </Funnel.Step>
          <Funnel.Step name="memberLimit">
            <ClubMemberLimitInput onNextStep={methods.handleSubmit(onSubmit)} />
          </Funnel.Step>
          <Funnel.Step name="finish">
            <ClubCreateSuccess />
          </Funnel.Step>
        </Funnel>
      </div>
    </FormProvider>
  )
}

export default CreateClubPage
