import { useFormContext } from "react-hook-form"
import { Input } from "@/_common/_components/Input"
import Button from "@/_common/_components/Button"

interface ClubScheduleInputProps {
  onNextStep: () => void
}

const ClubScheduleInput = ({ onNextStep }: ClubScheduleInputProps) => {
  const {
    register,
    formState: { errors },
    trigger
  } = useFormContext()

  const handleNextStep = async () => {
    const isValid = await trigger("schedule")
    if (isValid) onNextStep()
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold text-center mb-4">
        정모 주기를 입력해주세요
      </h1>
      <Input
        {...register("schedule", { required: "정모 주기는 필수입니다" })}
        placeholder="예: 매주 토요일 오후 2시"
        className="w-[75%] h-[40px] mx-auto max-w-md mt-16"
      />
      {errors.schedule && (
        <p className="text-red-500 mt-2">{errors.schedule.message as string}</p>
      )}
      <Button
        onClick={handleNextStep}
        className="w-[40%] mt-16">
        다음
      </Button>
    </div>
  )
}

export default ClubScheduleInput
