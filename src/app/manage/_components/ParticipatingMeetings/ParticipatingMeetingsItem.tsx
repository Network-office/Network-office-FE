import Link from "next/link"
import Image from "next/image"
import { Users, Clock, User } from "lucide-react"
import dateToString from "@/_common/_utils/dateToString"
import DropBox from "@/_common/_components/DropBox"
import { ScrollArea } from "@/_common/_components/ScrollArea"
import { UserInformTypes } from "@/app/mypage/types"

interface ParticipatingMeetingItemProps {
  meetingId: number
  title: string
  date: string
  startTime: string
  endTime: string
  nowPeople: number
  totalPeople: number
  confirmedParticipants: UserInformTypes[]
}

const ParticipatingMeetingItem = ({
  meetingId,
  title,
  date,
  startTime,
  endTime,
  nowPeople,
  totalPeople,
  confirmedParticipants
}: ParticipatingMeetingItemProps) => {
  return (
    <div className="w-full border-b-[1px] border-t-[1px] mb-1 shadow-lg px-4 py-2">
      <Link href={`/meeting/${meetingId}`}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <ScrollArea
          enableDrag={true}
          orientation="horizontal"
          className="w-full my-1 ">
          <div className="flex space-x-2 min-w-max p-1 ">
            {confirmedParticipants.map((participant) => (
              <DropBox
                key={participant.userId}
                items={[{ label: participant.nickName, onClick: () => {} }]}
                triggerClassName="w-[40px] h-[40px] p-1 bg-slate-400 rounded-full"
                contentClassName="w-32">
                {participant.profileImg ? (
                  <Image
                    src={participant.profileImg}
                    alt={participant.nickName}
                    width={40}
                    height={40}
                    className="rounded-full "
                  />
                ) : (
                  <User className="w-[40px] h-[40px] rounded-full" />
                )}
              </DropBox>
            ))}
          </div>
        </ScrollArea>
        <div className="flex justify-between mr-8">
          <div className="flex gap-2">
            <Clock />
            <p>{`${dateToString(date)} / ${startTime}~${endTime}`}</p>
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
