"use client"

import { useForm, FormProvider } from "react-hook-form"
import { useFunnel } from "@/_common/_hooks/useFunnel"
import Button from "@/_common/_components/Button"

import Topbar from "@/_common/_components/Topbar"
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
      <Topbar
        className="bg-slate-100"
        leftContent={
          <div className="flex gap-2">
            <Topbar.BackLink />
            <h1 className="font-semibold tex">{step}</h1>
          </div>
        }
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
