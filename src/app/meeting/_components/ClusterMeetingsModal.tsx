import { MeetingPositionTypes } from "../types"
import Image from "next/image"
import sportIcon from "~/icon/sport.png"
import coffeeIcon from "~/icon/coffee.png"
import bookIcon from "~/icon/book.png"
import cultureIcon from "~/icon/culture.png"
import musicIcon from "~/icon/music.png"
import travelIcon from "~/icon/travel.png"
import volunteerIcon from "~/icon/volunteer.png"
import foodIcon from "~/icon/food.png"

type CategoryType = {
  [key in
    | "스포츠"
    | "파티"
    | "커피"
    | "맛집"
    | "봉사"
    | "문화생활"
    | "스터디"
    | "산책"]: {
    color: string
    icon: string
  }
}

const category: CategoryType = {
  스포츠: { color: "#4BB4DE", icon: sportIcon.src },
  파티: { color: "#FFB6C1", icon: musicIcon.src },
  커피: { color: "#E6BE8A", icon: coffeeIcon.src },
  맛집: { color: "#FFD700", icon: foodIcon.src },
  봉사: { color: "#98FB98", icon: volunteerIcon.src },
  문화생활: { color: "#FFA07A", icon: cultureIcon.src },
  스터디: { color: "#87CEFA", icon: bookIcon.src },
  산책: { color: "#DDA0DD", icon: travelIcon.src }
}

interface ClusterMeetingsModalProps {
  meetings: MeetingPositionTypes[]
  onMeetingClick: (meeting: MeetingPositionTypes) => void
}

const ClusterMeetingsModal = ({
  meetings,
  onMeetingClick
}: ClusterMeetingsModalProps) => {
  return (
    <div className="bg-white w-screen max-h-[70vh] overflow-y-auto rounded-t-lg border-t-2 border-slate-400">
      <h2 className="text-xl font-bold text-center py-4 border-b">
        해당 지역의 모임 ({meetings.length})
      </h2>
      {meetings.map((meeting, index) => (
        <div
          key={index}
          onClick={() => onMeetingClick(meeting)}
          className="p-4 hover:bg-gray-50 cursor-pointer border-b">
          <div className="flex items-center gap-3">
            <div
              className="relative w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor:
                  category[meeting.category as keyof CategoryType].color
              }}>
              <Image
                src={category[meeting.category as keyof CategoryType].icon}
                alt={meeting.category}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-medium">{meeting.title}</h3>
              <p className="text-sm text-gray-500">{meeting.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ClusterMeetingsModal
