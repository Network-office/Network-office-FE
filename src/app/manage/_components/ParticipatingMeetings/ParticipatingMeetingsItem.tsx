import Link from "next/link"
import { Users, Clock } from "lucide-react"

interface ParticipatingMeetingItemProps {
  meetingId: number
  title: string
  date: string
  startTime: string
  endTime: string
  nowPeople: number
  totalPeople: number
}

const ParticipatingMeetingItem = ({
  meetingId,
  title,
  date,
  startTime,
  endTime,
  nowPeople,
  totalPeople
}: ParticipatingMeetingItemProps) => {
  return (
    <div className="w-full border-b-[1px] border-t-[1px] mb-1 shadow-lg px-4 py-2">
      <Link href={`/meeting/${meetingId}`}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex justify-between mr-8">
          <div className="flex gap-2">
            <Clock />
            <p>{`${date} / ${startTime}~${endTime}`}</p>
          </div>
          <div className="flex gap-2">
            <Users />
            <p>
              {nowPeople}/{totalPeople}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ParticipatingMeetingItem
