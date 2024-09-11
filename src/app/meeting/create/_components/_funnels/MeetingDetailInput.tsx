import { useFormContext } from "react-hook-form"

interface MeetingDetailInputProps {
  onNextStep: () => void
}

const MeetingDetailInput = ({ onNextStep }: MeetingDetailInputProps) => {
  const { register, trigger } = useFormContext()

  const onClickNextButton = async () => {
    const isValid = await trigger("detail")

    if (isValid) {
      onNextStep()
    } else {
      alert("최소 10글자 이상 작성해주세요 ")
    }
  }

  return (
    <div className="w-screen">
      <textarea
        placeholder="최소 10글자 이상 작성해주세요."
        {...register("detail", {
          required: "제목은 필수 입력입니다.",
          minLength: {
            value: 10,
            message: "최소 10글자 이상 작성해주세요!"
          }
        })}
        className="w-[320px] min-h-[500px] max-h-[2000px] border-[1px] border-slate-200 flex justify-center mx-auto mt-8 px-2 py-2"
      />
      <button
        className="w-[70%] h-[40px] mt-8 mx-auto bg-blue-300 rounded-md flex justify-center text-center py-auto"
        onClick={onClickNextButton}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </button>
    </div>
  )
}

export default MeetingDetailInput
