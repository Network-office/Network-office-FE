import { Dumbbell } from "lucide-react"
import { Pizza } from "lucide-react"
import { Beer } from "lucide-react"
import { Clapperboard } from "lucide-react"
import { Coffee } from "lucide-react"

interface MeetingSummarySectionProps {
  participatedMeetingList: string[]
}

const getMeetingIconComponent = (icon: string) => {
  switch (icon) {
    case "sport":
      return (
        <Dumbbell className="w-[19%] h-[60px] border-[5px] shadow-2xl border-white rounded-full px-2 py-2 bg-blue-400" />
      )
    case "food":
      return (
        <Pizza className="w-[19%] h-[60px] border-[5px] shadow-2xl border-white rounded-full px-2 py-2 bg-yellow-200" />
      )
    case "beer":
      return (
        <Beer className="w-[19%] h-[60px] border-[5px] shadow-2xl border-white rounded-full px-2 py-2 bg-yellow-500" />
      )
    case "movie":
      return (
        <Clapperboard className="w-[19%] h-[60px] border-[5px] shadow-2xl border-white rounded-full px-2 py-2 bg-red-400" />
      )
    case "coffee":
      return (
        <Coffee className="w-[19%] h-[60px] border-[5px] shadow-2xl border-white rounded-full px-2 py-2 bg-green-400" />
      )
  }
  return ""
}

const MeetingSummarySection = ({
  participatedMeetingList
}: MeetingSummarySectionProps) => {
  return (
    <div className="border-[1px] w-[90%] h-[140px] mt-[10px] rounded-3xl mx-auto shadow-1xl">
      <h1 className="w-[90%] mx-auto mt-[10px] font-semibold">
        최근 모임 참여 이력
      </h1>
      <div className="mt-[10px] w-[85%] mx-auto flex gap-1">
        {participatedMeetingList.slice(0, 5).map((item) => {
          return getMeetingIconComponent(item)
        })}
      </div>
    </div>
  )
}
export default MeetingSummarySection
