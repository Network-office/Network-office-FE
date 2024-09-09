import Input from "@/_common/_components/Input"

interface MeetingTitleInputProps {
  onNextStep: () => void
}

const MeetingTitleInput = ({ onNextStep }: MeetingTitleInputProps) => {
  return (
    <div>
      <h1 className="mx-4 text-[28px] font-bold text-center mt-20">
        모임 제목은 뭐가 좋을까요?
      </h1>
      <h3 className="text-gray-400 text-[12px] text-center">
        모임 제목은 8자리에서 최대 20자리 미만으로 작성해주세요{" "}
      </h3>
      <Input className="w-[70%] h-[50px] mx-auto mt-20" />
      <button
        className="w-[70%] h-[40px] mt-8 mx-auto bg-blue-300 rounded-md flex justify-center text-center py-auto"
        onClick={onNextStep}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </button>
    </div>
  )
}
export default MeetingTitleInput
