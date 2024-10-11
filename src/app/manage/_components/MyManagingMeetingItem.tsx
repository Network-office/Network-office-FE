"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import { Users, Clock, Settings } from "lucide-react"
import useModal from "@/_common/_hooks/useModal"
import MeetingOptionModal from "./MeetingOptionModal"
import NewParticipateModal from "./NewParticipateModal"
import ExpelReasonModal from "./ExpelREasonModal"
import { UserInformTypes } from "@/app/mypage/types"
import { ScrollArea } from "@/_common/_components/ScrollArea"
import DropBox from "@/_common/_components/DropBox"
import Button from "@/_common/_components/Button"
import useExpelParticipant from "../_hooks/_mutations/useExpelParticipant"
import { useToast } from "@/_common/_hooks/useToast"
import { User } from "lucide-react"

interface MyManagingMeetingItemProps {
  title: string
  date: string
  startTime: string
  endTime: string
  nowPeople: number
  totalPeople: number
  meetingId: number
  status: string
  confirmedParticipants: UserInformTypes[]
}

const MyManagingMeetingItem = ({
  title,
  date,
  startTime,
  endTime,
  nowPeople: initialNowPeople,
  totalPeople,
  meetingId,
  confirmedParticipants: initialConfirmedParticipants,
  status
}: MyManagingMeetingItemProps) => {
  const { ModalComponent, setModalOpen, setModalClose } = useModal()
  const [selectedModal, setSelectedModal] = useState("")
  const [selectedParticipant, setSelectedParticipant] =
    useState<UserInformTypes | null>(null)
  const [showExpelModal, setShowExpelModal] = useState(false)
  const [confirmedParticipants, setConfirmedParticipants] = useState(
    initialConfirmedParticipants
  )
  const [nowPeople, setNowPeople] = useState(initialNowPeople)

  const expelMutation = useExpelParticipant(meetingId)
  const { toast } = useToast()

  const handleExpel = (reason: string) => {
    if (selectedParticipant) {
      expelMutation.mutate(
        { userId: selectedParticipant.userId, reason },
        {
          onSuccess: () => {
            setShowExpelModal(false)
            setConfirmedParticipants((prev) =>
              prev.filter((p) => p.userId !== selectedParticipant.userId)
            )
            setNowPeople((prev) => prev - 1)
          },
          onError: () => {
            toast({
              title: "추방 실패 했습니다.",
              description: "잠시 후 다시 시도해주세요"
            })
          }
        }
      )
    } else {
      console.error("선택된 참가자가 없습니다.")
    }
  }

  return (
    <div className="w-full border-b-[1px] border-t-[1px] mb-1 shadow-lg px-4 py-2">
      <div className="flex w-full">
        <div className="w-full  flex justify-between">
          <span className="font-medium text-xl mt-1 text-ellipsis w-[88%] overflow-hidden whitespace-nowrap">
            {title}
          </span>
          <button
            onClick={() => {
              setSelectedModal("meetingOption")
              setModalOpen()
            }}>
            <Settings />
          </button>
        </div>
      </div>
      <ScrollArea
        enableDrag={true}
        orientation="horizontal"
        className="w-full my-1 ">
        <div className="flex space-x-2 min-w-max p-1 ">
          {confirmedParticipants.map((participant) => (
            <DropBox
              key={participant.userId}
              items={[
                { label: participant.nickName, onClick: () => {} },
                {
                  label: "추방하기",
                  onClick: () => {
                    setSelectedParticipant(participant)
                    setShowExpelModal(true)
                  }
                }
              ]}
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
          <p>{`${date} / ${startTime}~${endTime}`}</p>
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
          onClick={() => {
            setModalOpen()
            setSelectedModal("newParticipate")
          }}
          className="mt-2  w-[32%] h-[40px] rounded-sm shadow-lg ">
          신규 참가 관리
        </Button>
      </div>
      <ModalComponent className="w-full h-full">
        {selectedModal === "meetingOption" && (
          <MeetingOptionModal
            meetingId={meetingId}
            onClose={setModalClose}
          />
        )}
        {selectedModal === "newParticipate" && (
          <NewParticipateModal
            meetingId={meetingId}
            onClickModalCloseHandle={setModalClose}
          />
        )}
      </ModalComponent>
      {showExpelModal && (
        <ExpelReasonModal
          onClose={() => setShowExpelModal(false)}
          onExpel={(reason) => {
            handleExpel(reason)
          }}
        />
      )}
    </div>
  )
}
export default MyManagingMeetingItem
