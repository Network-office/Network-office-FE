import { useFormContext } from "react-hook-form"

interface MeetingTimeInputProps {
  onNextStep: () => void
}

const MeetingTimeInput = ({ onNextStep }: MeetingTimeInputProps) => {
  const { register, watch } = useFormContext()

  const startTime = watch("startTime")
  const endTime = watch("endTime")

  return (
    <div>
      <h1 className="mx-4 text-[24px] font-bold text-center mt-20">
        모임은 언제 진행하실건가요?
      </h1>
      <div className="mt-[80px]">
        <div className="flex w-fit h-[50px] mx-auto">
          <input
            type="time"
            className="w-[200px] text-center  text-xl h-[50px] border-[1px] mr-4"
            {...register("startTime")}
          />
          <span className="text-xl font-semibold w-[50px] my-auto h-fit">
            부터~
          </span>
        </div>
        <div className="flex w-fit  h-[50px] mx-auto ">
          <input
            type="time"
            className="w-[200px] text-center text-xl h-[50px] border-[1px] mr-4"
            {...register("endTime")}
          />
          <span className="text-xl font-semibold w-[50px] my-auto h-fit">
            까지
          </span>
        </div>
      </div>
      {startTime && endTime && (
        <button
          className="w-[70%] h-[40px] mt-[60px] mx-auto bg-blue-300 rounded-md flex justify-center text-center py-auto"
          onClick={onNextStep}
          disabled={!startTime || !endTime}>
          <span className="my-auto text-white font-semibold">다음으로</span>
        </button>
      )}
    </div>
  )
}

export default MeetingTimeInput
