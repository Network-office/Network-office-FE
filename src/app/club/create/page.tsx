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
            <ClubMemberLimitInput onNextStep={pushStep} />
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
