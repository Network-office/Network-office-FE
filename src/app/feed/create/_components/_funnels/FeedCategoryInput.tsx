"use client"

import { useFormContext } from "react-hook-form"
import Input from "@/_common/_components/Input"
import Button from "@/_common/_components/Button"

interface FeedCategoryInputProps {
  onNextStep: () => void
}

const FeedCategoryInput = ({ onNextStep }: FeedCategoryInputProps) => {
  const {
    register,
    formState: { errors },
    trigger
  } = useFormContext()

  const handleNextStep = async () => {
    const isValid = await trigger("category")
    if (isValid) {
      onNextStep()
    } else {
      const error = errors.category?.message
      if (typeof error === "string") {
        alert(error)
      }
    }
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-[28px] font-bold text-center mb-2">
        카테고리를 선택해주세요
      </h1>
      <Input
        className="w-[75%] h-[50px] mx-auto mt-[50px]"
        {...register("category", { required: "카테고리를 입력해주세요" })}
        placeholder="카테고리를 입력하세요 (예: 기술, 라이프스타일, 음식)"
      />
      {errors.category && (
        <p className="text-red-500 text-sm mt-2">
          {errors.category.message as string}
        </p>
      )}
      <Button
        className="w-[75%] h-[40px] mt-[50px] text-white font-semibold"
        onClick={handleNextStep}>
        다음으로
      </Button>
    </div>
  )
}

export default FeedCategoryInput
