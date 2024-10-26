"use client"

import Input from "@/components/ui/input"
import { useFormContext } from "react-hook-form"
import { useToast } from "@/_common/_hooks/useToast"
import Button from "@/_common/_components/Button"

interface MeetingTitleInputProps {
  onNextStep: () => void
}

const MeetingTitleInput = ({ onNextStep }: MeetingTitleInputProps) => {
  const {
    register,
    formState: { errors },
    trigger
  } = useFormContext()

  const { toast } = useToast()

  const handleNextStep = async () => {
    const isValid = await trigger("title")
    if (isValid) {
      onNextStep()
    } else {
      const error = errors.title?.message
      console.log("Error message from errors object:", error)
      if (typeof error === "string") {
        toast({
          title: error,
          description: "제목을 다시 작성해주세요.",
          width: "280px",
          height: "80px"
        })
      }
    }
  }

  return (
    <div>
      <h1 className="mx-4 text-[28px] font-bold text-center mt-20">
        모임 제목은 뭐가 좋을까요?
      </h1>
      <h3 className="text-gray-400 text-[12px] text-center">
        모임 제목은 6자리에서 최대 20자리 미만으로 작성해주세요
      </h3>
      <Input
        className="w-[70%] h-[50px] mx-auto mt-20"
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
      />
      <Button
        className="w-[70%] h-[40px] mt-8 mx-auto rounded-md flex justify-center text-center py-auto"
        onClick={handleNextStep}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </Button>
    </div>
  )
}

export default MeetingTitleInput
