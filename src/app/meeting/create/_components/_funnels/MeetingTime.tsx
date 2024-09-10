import Input from "@/_common/_components/Input"

interface MeetingTimeInputProps {
  onNextStep: () => void
}

const MeetingTimeInput = ({ onNextStep }: MeetingTimeInputProps) => {
  return (
    <div>
      <h1 className="mx-4 text-[24px] font-bold text-center mt-20">
        모임 예상 활동시간을 작성해주세요.
      </h1>
      <div className="mt-[80px]">
        <div className="flex w-fit h-[50px] mx-auto">
          <input
            type="time"
            className="w-[200px] text-center  text-xl h-[50px] border-[1px] mr-4"
          />
          <span className="text-xl font-semibold w-[50px] my-auto h-fit">
            부터~
          </span>
        </div>
        <div className="flex w-fit  h-[50px] mx-auto ">
          <input
            type="time"
            className="w-[200px] text-center text-xl h-[50px] border-[1px] mr-4"
          />
          <span className="text-xl font-semibold w-[50px] my-auto h-fit">
            까지
          </span>
        </div>
      </div>
      <button
        className="w-[70%] h-[40px] mt-[60px] mx-auto bg-blue-300 rounded-md flex justify-center text-center py-auto"
        onClick={onNextStep}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </button>
    </div>
  )
}

export default MeetingTimeInput
