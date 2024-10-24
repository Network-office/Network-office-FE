import { useFormContext } from "react-hook-form"
import Button from "@/_common/_components/Button"
import { useToast } from "@/_common/_hooks/useToast"

interface MeetingTimeInputProps {
  onNextStep: () => void
}

const MeetingTimeInput = ({ onNextStep }: MeetingTimeInputProps) => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext()
  const { toast } = useToast()

  const startTime = watch("startTime")
  const endTime = watch("endTime")

  const handleNextStep = () => {
    if (startTime && endTime) {
      if (startTime >= endTime) {
        toast({
          title: "시간 오류",
          description:
            "종료 시간은 시작 시간보다 늦어야 합니다. 다시 설정해주세요.",
          width: "300px",
          height: "80px"
        })
      } else {
        onNextStep()
      }
    }
  }

  return (
    <div>
      <h1 className="mx-4 text-[24px] font-bold text-center mt-20">
        모임 예상 활동시간을 작성해주세요.
      </h1>
      <div className="mt-[80px]">
        <div className="flex w-fit h-[50px] mx-auto">
          <input
            type="time"
            className="w-[150px] text-center text-xl h-[50px] border-[1px] mr-4"
            {...register("startTime", { required: true })}
          />
          <span className="text-xl my-auto">부터</span>
        </div>
        <div className="flex w-fit h-[50px] mx-auto mt-4">
          <input
            type="time"
            className="w-[150px] text-center text-xl h-[50px] border-[1px] mr-4"
            {...register("endTime", { required: true })}
          />
          <span className="text-xl my-auto">까지</span>
        </div>
      </div>
      <Button
        className="w-[240px] h-[40px] mt-[60px] mx-auto rounded-md flex justify-center text-center py-auto"
        onClick={handleNextStep}
        disabled={!startTime || !endTime}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </Button>
    </div>
  )
}

export default MeetingTimeInput
