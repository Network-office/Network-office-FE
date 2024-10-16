import Link from "next/link"
import Image from "next/image"
import { Users, Clock, User } from "lucide-react"
import dateToString from "@/_common/_utils/dateToString"
import DropBox from "@/_common/_components/DropBox"
import { ScrollArea } from "@/_common/_components/ScrollArea"
import { UserInformTypes } from "@/app/mypage/types"
import Button from "@/_common/_components/Button"
import useModal from "@/_common/_hooks/useModal"
import useLeaveMeeting from "../../_hooks/_mutations/useLeaveMeeting"
import { useToast } from "@/_common/_hooks/useToast"

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
  const { ModalComponent, setModalOpen, setModalClose } = useModal()
  const { mutate: leaveMeeting } = useLeaveMeeting()

  const handleLeaveMeeting = () => {
    leaveMeeting(
      { userId: 1, meetingId: meetingId.toString() },
      {
        onSuccess: () => {
          setModalClose()
        }
      }
    )
  }

  return (
    <div className="w-[95%] border-b-[1px] border-t-[1px] mb-1 shadow-lg px-4 py-2">
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
      <div className="flex gap-2">
        <Link
          href={`/meeting/${meetingId}`}
          className="mt-2 text-center flex justify-center items-center bg-black w-[32%] h-[40px] rounded-sm shadow-lg text-white">
          게시글로 이동
        </Link>
        <Button className="mt-2 w-[32%] h-[40px] rounded-sm shadow-lg ">
          모임톡 가기
        </Button>
        <Button
          onClick={setModalOpen}
          className="mt-2  w-[32%] h-[40px] rounded-sm shadow-lg ">
          모임 나가기
        </Button>
      </div>
      <ModalComponent className="w-full h-full">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[80%] max-w-[300px]">
            <h2 className="text-xl font-bold mb-4">모임 나가기</h2>
            <p className="mb-4">정말로 이 모임에서 나가시겠습니까?</p>
            <div className="flex justify-end">
              <Button
                onClick={setModalClose}
                className="mr-2">
                취소
              </Button>
              <Button
                variant="destructive"
                onClick={handleLeaveMeeting}>
                나가기
              </Button>
            </div>
          </div>
        </div>
      </ModalComponent>
    </div>
  )
}

export default ParticipatingMeetingItem
