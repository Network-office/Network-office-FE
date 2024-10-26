"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/_common/_components/Input"
import Button from "@/_common/_components/Button"

interface FeedTitleInputProps {
  onNextStep: () => void
}

const FeedTitleInput = ({ onNextStep }: FeedTitleInputProps) => {
  const {
    register,
    formState: { errors },
    trigger
  } = useFormContext()

  const handleNextStep = async () => {
    const isValid = await trigger("title")
    if (isValid) {
      onNextStep()
    } else {
      const error = errors.title?.message
      if (typeof error === "string") {
        alert(error)
      }
    }
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-[28px] font-bold text-center mb-2">
        피드 제목은 뭐가 좋을까요?
      </h1>
      <h3 className="text-gray-400 text-[12px] text-center mb-20">
        피드 제목은 6자리에서 최대 20자리 미만으로 작성해주세요
      </h3>
      <Input
        className="w-[75%] h-[50px] mx-auto placeholder:text-center"
        {...register("title", {
          required: "제목은 필수 입력입니다.",
          minLength: {
            value: 6,
            message: "제목은 최소 6자 이상이어야 합니다."
          },
          maxLength: {
            value: 20,
            message: "제목은 최대 20자 이하여야 합니다."
          }
        })}
        placeholder="피드 제목을 입력하세요"
      />
      {errors.title && (
        <p className="text-red-500 text-sm mt-2">
          {errors.title.message as string}
        </p>
      )}
      <Button
        className="w-[75%] h-[40px] mt-8  text-white font-semibold"
        onClick={handleNextStep}>
        다음으로
      </Button>
    </div>
  )
}

export default FeedTitleInput
