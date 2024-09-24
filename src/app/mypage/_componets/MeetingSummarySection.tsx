import { Dumbbell } from "lucide-react"
import { Pizza } from "lucide-react"
import { Beer } from "lucide-react"
import { Clapperboard } from "lucide-react"
import { Coffee } from "lucide-react"

const MeetingSummarySection = () => {
  return (
    <div>
      <h1 className="w-[80%] mx-auto mt-[10px] font-semibold">
        최근 모임 참여 이력
      </h1>
      <div className="mt-[10px] w-[85%] mx-auto flex">
        <Dumbbell className="w-[19%] h-[60px] border-[5px] shadow-2xl border-white rounded-full px-2 py-2 bg-blue-400" />
        <Pizza className="w-[19%] h-[60px] border-[5px] shadow-2xl border-white rounded-full px-2 py-2 bg-yellow-200" />
        <Beer className="w-[19%] h-[60px] border-[5px] shadow-2xl border-white rounded-full px-2 py-2 bg-yellow-500" />
        <Clapperboard className="w-[19%] h-[60px] border-[5px] shadow-2xl border-white rounded-full px-2 py-2 bg-red-400" />
        <Coffee className="w-[19%] h-[60px] border-[5px] shadow-2xl border-white rounded-full px-2 py-2 bg-green-400" />
      </div>
    </div>
  )
}
export default MeetingSummarySection
