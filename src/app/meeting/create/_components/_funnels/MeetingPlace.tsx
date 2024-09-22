import Input from "@/_common/_components/Input"
import { Search } from "lucide-react"

interface MeetingTitleInputProps {
  onNextStep: () => void
}

const MeetingPlace = ({ onNextStep }: MeetingTitleInputProps) => {
  return (
    <div className="w-screen">
      <h1 className="mx-4 text-[28px] font-bold text-center mt-12">
        모임 장소는 어디가 좋을까요
      </h1>
      <div className="w-[300px] h-[30px] border-b-2 flex mx-auto mt-14">
        <input
          className="w-[280px] h-[30px] border-b-2"
          mx-auto
        />
        <Search />
      </div>
    </div>
  )
}
export default MeetingPlace
