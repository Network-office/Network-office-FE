"use client"

import { useFormContext } from "react-hook-form"
import Button from "@/_common/_components/Button"
import { useToast } from "@/_common/_hooks/useToast"

interface FeedContentInputProps {
  onSubmitForm: () => void
}

const FeedContentInput = ({ onSubmitForm }: FeedContentInputProps) => {
  const {
    register,
    trigger,
    formState: { errors }
  } = useFormContext()
  const { toast } = useToast()

  const handleNextStep = async () => {
    const isValid = await trigger("description")

    if (isValid) {
      onSubmitForm()
    } else {
      const error = errors.description?.message
      if (typeof error === "string") {
        toast({
          width: "270px",
          height: "50px",
          title: error
        })
      }
    }
  }

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-2xl w-[85%] font-bold mb-4">
        피드 내용을 작성해주세요
      </h1>
      <textarea
        className="w-[85%] min-h-[400px] border-[1px] rounded-lg border-slate-200 p-2 mx-auto"
        {...register("description", {
          required: "내용을 입력해주세요.",
          minLength: {
            value: 10,
            message: "내용은 최소 10자 이상이어야 합니다."
          }
        })}
        placeholder="피드 내용을 작성하세요"
      />

      <Button
        className="w-[70%] h-[40px] mt-4 text-white font-semibold mb-16"
        onClick={handleNextStep}>
        작성 완료
      </Button>
    </div>
  )
}

export default FeedContentInput
