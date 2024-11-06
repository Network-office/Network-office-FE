import { useFormContext } from "react-hook-form"
import Input from "@/_common/_components/Input"
import Button from "@/_common/_components/Button"

interface ClubMemberLimitInputProps {
  onNextStep: () => void
}

const ClubMemberLimitInput = ({ onNextStep }: ClubMemberLimitInputProps) => {
  const {
    register,
    formState: { errors },
    trigger
  } = useFormContext()

  const handleNextStep = async () => {
    const isValid = await trigger("memberLimit")
    if (isValid) onNextStep()
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold text-center mb-4">
        동호회 최대 인원을 입력해주세요
      </h1>
      <div className="flex gap-2 mt-12 justify-center items-center">
        <Input
          type="number"
          {...register("memberLimit", {
            required: "최대 인원은 필수입니다",
            min: { value: 2, message: "최소 2명 이상이어야 합니다" },
            max: { value: 50, message: "최대 100명까지 가능합니다" }
          })}
          placeholder="예: 20"
          className="w-[55px] border-0 border-b-2 border-black rounded-none focus:rounded-sm mx-0 px-0 text-center "
        />
        <p className="font-bold">명</p>
      </div>
      {errors.memberLimit && (
        <p className="text-red-500 mt-2">
          {errors.memberLimit.message as string}
        </p>
      )}
      <Button
        onClick={handleNextStep}
        className="mt-16 w-[40%]">
        완료
      </Button>
    </div>
  )
}

export default ClubMemberLimitInput
