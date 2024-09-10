import { useRef } from "react"
import { useFormContext } from "react-hook-form"
interface MeetingDetailInputProps {
  onNextStep: () => void
}

const MeetingDetailInput = ({ onNextStep }: MeetingDetailInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { register } = useFormContext()

  const handleInput = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = "auto"
      textarea.style.height = `${textarea.scrollHeight}px`
      textarea.scrollTop = textarea.scrollHeight
    }
  }

  return (
    <div className="w-screen">
      <textarea
        {...register("detail")}
        ref={textareaRef}
        className="w-[320px] min-h-[500px] max-h-[2000px] border-[1px] border-slate-200 flex justify-center mx-auto mt-8 px-2 py-2"
        onInput={handleInput}
      />
      <button
        className="w-[70%] h-[40px] mt-8 mx-auto bg-blue-300 rounded-md flex justify-center text-center py-auto"
        onClick={onNextStep}>
        <span className="my-auto text-white font-semibold">다음으로</span>
      </button>
    </div>
  )
}

export default MeetingDetailInput
