import { useFormContext } from "react-hook-form"

interface MeetingDateInputProps {
  onNextStep: () => void
}

const MeetingDateInput = ({ onNextStep }: MeetingDateInputProps) => {
  const { register, watch } = useFormContext()

  const date = watch("date")

  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const day = String(today.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  return (
    <div>
      <h1 className="mx-4 text-[24px] font-bold text-center mt-20">
        모임 예상 활동시간을 작성해주세요.
      </h1>
      <div className="mt-[80px]">
        <div className="flex w-fit h-[50px] mx-auto">
          <input
            type="date"
            className="w-[240px] text-center text-xl h-[50px] border-[1px] mr-4"
            {...register("date")}
            min={getTodayDate()}
          />
        </div>
      </div>
      <button
        className="w-[240px] h-[40px] mt-[60px] mx-auto bg-blue-300 rounded-md flex justify-center text-center py-auto"
        onClick={onNextStep}
        disabled={!date}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </button>
    </div>
  )
}

export default MeetingDateInput
