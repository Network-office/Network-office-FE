"use client"

import { useForm, FormProvider } from "react-hook-form"
import { useFunnel } from "@/_common/_hooks/useFunnel"

import CreateFeedHeader from "./_components/CreateFeedHeader"
import FeedTitleInput from "./_components/_funnels/FeedTitleInput"
import FeedCategoryInput from "./_components/_funnels/FeedCategoryInput"
import FeedContentInput from "./_components/_funnels/FeedContentInput"
import usePostFeed from "./_hooks/_mutations/usePostFeed"

import { FeedFormTypes } from "./types"

const STEPS = ["title", "category", "content"]

export default function CreateFeedPage() {
  const { Funnel, step, pushStep, popStep } = useFunnel(STEPS)
  const { mutate } = usePostFeed()
  const methods = useForm<FeedFormTypes>()

  const onSubmit = (data: FeedFormTypes) => {
    mutate(data)
  }

  return (
    <div className="">
      <CreateFeedHeader
        popStep={popStep}
        step={step as "title" | "category" | "content"}
      />
      <FormProvider {...methods}>
        <Funnel>
          <Funnel.Step name="title">
            <FeedTitleInput onNextStep={pushStep} />
          </Funnel.Step>
          <Funnel.Step name="category">
            <FeedCategoryInput onNextStep={pushStep} />
          </Funnel.Step>
          <Funnel.Step name="content">
            <FeedContentInput onSubmitForm={methods.handleSubmit(onSubmit)} />
          </Funnel.Step>
        </Funnel>
      </FormProvider>
    </div>
  )
}
