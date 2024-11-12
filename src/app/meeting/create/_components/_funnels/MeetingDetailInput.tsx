import { useFormContext } from "react-hook-form"
import Button from "@/_common/_components/Button"
import { useToast } from "@/_common/_hooks/useToast"

interface MeetingDetailInputProps {
  onNextStep: () => void
}

const MeetingDetailInput = ({ onNextStep }: MeetingDetailInputProps) => {
  const { register, trigger } = useFormContext()

  const { toast } = useToast()

  const onClickNextButton = async () => {
    const isValid = await trigger("description")

    if (isValid) {
      onNextStep()
    } else {
      toast({
        title: "입력 오류",
        description: "최소 10글자 이상 작성해주세요!",
        width: "280px",
        height: "80px"
      })
    }
  }

  return (
    <div className="w-screen">
      <textarea
        placeholder="최소 10글자 이상 작성해주세요."
        {...register("description", {
          required: "상세 설명 작성은 필수 입력입니다.",
          minLength: {
            value: 10,
            message: "최소 10글자 이상 작성해주세요!"
          }
        })}
        className="w-[320px] min-h-[480px] max-h-[2000px] border-[1px] border-slate-200 flex justify-center mx-auto mt-8 px-2 py-2"
      />
      <Button
        className="w-[70%] h-[40px] mt-4 mb-20 mx-auto rounded-md flex justify-center text-center py-auto"
        onClick={onClickNextButton}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </Button>
    </div>
  )
}

export default MeetingDetailInput
