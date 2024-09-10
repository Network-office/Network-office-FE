import { useFormContext } from "react-hook-form"

interface MeetingPeopleInputProps {
  onNextStep: () => void
}

const MeetingPeopleInput = ({ onNextStep }: MeetingPeopleInputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div>
      <h1 className="mx-4 text-[22px] font-bold text-center mt-20">
        모임 최대 인원수는 몇명이 좋을까요?
      </h1>
      <h3 className="text-gray-400 text-[12px] text-center">
        최소 2명이상 최대 20명 미만으로 작성해주세요.
      </h3>
      <div className="flex mt-20 w-[100px] mx-auto border-b-[2px] pb-2 justify-center">
        <input
          className={`focus:outline-none w-[60px] px-4 text-2xl ${errors.peopleNumber ? "border-red-500" : ""}`}
          type="number"
          {...register("peopleNumber", {
            min: {
              value: 2,
              message: "최소 2명 이상 입력해주세요."
            },
            max: {
              value: 20,
              message: "최대 20명 이하로 입력해주세요."
            },
            valueAsNumber: true
          })}
        />
        <p className="text-2xl font-semibold">명</p>
      </div>
      {errors.peopleNumber && <p className="text-red-500 text-center mt-2"></p>}
      <button
        className="w-[60%] h-[40px] mt-[30px] mx-auto bg-blue-300 rounded-md flex justify-center text-center py-auto"
        onClick={onNextStep}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </button>
    </div>
  )
}

export default MeetingPeopleInput
