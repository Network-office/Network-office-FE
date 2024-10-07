"use client"

import { useForm, FormProvider } from "react-hook-form"
import { useFunnel } from "@/_common/_hooks/useFunnel"

import CreateFeedHeader from "./_components/CreateFeedHeader"
import FeedTitleInput from "./_components/FeedTitleInput"
import FeedCategoryInput from "./_components/FeedCategoryInput"
import FeedContentInput from "./_components/FeedContentInput"

import { FeedFormTypes } from "./types"

const STEPS = ["title", "category", "content"]

export default function CreateFeedPage() {
  const { Funnel, step, pushStep, popStep } = useFunnel(STEPS)
  const methods = useForm<FeedFormTypes>()

  const onSubmit = (data: FeedFormTypes) => {
    console.log("피드 생성:", data)
  }

  return (
    <div className="">
      <CreateFeedHeader
        popStep={popStep}
        step={step as "title" | "category" | "content"}
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Funnel>
            <Funnel.Step name="title">
              <FeedTitleInput onNextStep={pushStep} />
            </Funnel.Step>

            <Funnel.Step name="category">
              <FeedCategoryInput onNextStep={pushStep} />
            </Funnel.Step>

            <Funnel.Step name="content">
              <FeedContentInput onNextStep={pushStep} />
            </Funnel.Step>
          </Funnel>
        </form>
      </FormProvider>
    </div>
  )
}
