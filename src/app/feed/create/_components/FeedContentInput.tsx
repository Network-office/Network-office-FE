"use client"

import { useFormContext } from "react-hook-form"
import Button from "@/_common/_components/Button"

interface FeedContentInputProps {
  onNextStep: () => void
}

const FeedContentInput = ({ onNextStep }: FeedContentInputProps) => {
  const {
    register,
    formState: { errors },
    trigger
  } = useFormContext()

  const handleNextStep = async () => {
    const isValid = await trigger("content")
    if (isValid) {
      onNextStep()
    } else {
      const error = errors.content?.message
      if (typeof error === "string") {
        alert(error)
      }
    }
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold text-center mb-4">
        피드 내용을 작성해주세요
      </h1>
      <textarea
        className="w-[85%] min-h-[400px] border-[1px] rounded-lg border-slate-200 p-2 mx-auto"
        {...register("content", {
          required: "내용을 입력해주세요",
          minLength: {
            value: 10,
            message: "내용은 최소 10자 이상이어야 합니다."
          }
        })}
        placeholder="피드 내용을 작성하세요"
      />
      {errors.content && (
        <p className="text-red-500 text-sm mt-2">
          {errors.content.message as string}
        </p>
      )}
      <Button
        className="w-[70%] h-[40px] mt-8 text-white font-semibold"
        onClick={handleNextStep}>
        작성 완료
      </Button>
    </div>
  )
}

export default FeedContentInput
