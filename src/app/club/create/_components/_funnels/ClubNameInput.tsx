import { useFormContext } from "react-hook-form"
import Input from "@/_common/_components/Input"
import Button from "@/_common/_components/Button"

interface ClubNameInputProps {
  onNextStep: () => void
}

const ClubNameInput = ({ onNextStep }: ClubNameInputProps) => {
  const {
    register,
    formState: { errors },
    trigger
  } = useFormContext()

  const handleNextStep = async () => {
    const isValid = await trigger("name")
    if (isValid) onNextStep()
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold text-center my-12 ">
        동호회 이름을 입력해주세요
      </h1>
      <Input
        {...register("name", { required: "동호회 이름은 필수입니다" })}
        placeholder="동호회 이름"
        className="w-[65%] border-0 border-b-[1px] border-black focus:rounded-lg rounded-none max-w-md mx-auto text-center text-lg placeholder:text-center placeholder:text-lg"
      />
      {errors.name && (
        <p className="text-red-500 mt-2">{errors.name.message as string}</p>
      )}
      <Button
        onClick={handleNextStep}
        className="my-16 w-[40%] text-lg">
        다음
      </Button>
    </div>
  )
}

export default ClubNameInput
