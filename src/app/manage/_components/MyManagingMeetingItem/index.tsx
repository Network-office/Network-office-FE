"use client"

import Link from "next/link"

import { Users, Clock, Settings } from "lucide-react"
import useModal from "@/_common/_hooks/useModal"
import MeetingOptionModal from "./MeetingOptionModal"
import NewParticipateModal from "./NewParticipateModal"
import { useState } from "react"

interface MyManagingMeetingItemProps {
  title: string
  date: string
  startTime: string
  endTime: string
  nowPeople: number
  totalPeople: number
  meetingId: number
}

const MyManagingMeetingItem = ({
  title,
  date,
  startTime,
  endTime,
  nowPeople,
  totalPeople,
  meetingId
}: MyManagingMeetingItemProps) => {
  const { ModalComponent, setModalOpen, setModalClose } = useModal()
  const [selectedModal, setSelectedModal] = useState("")

  return (
    <div className="w-full border-b-[1px] border-t-[1px] h-[160px] mb-1 shadow-lg px-4 py-2">
      <div className="flex w-full">
        <div className="w-full  flex justify-between">
          <span className="font-medium text-xl mt-1">{title}</span>
          <button onClick={() => setModalOpen()}>
            <Settings />
          </button>
        </div>
      </div>
      <div className="flex justify-between mr-8 my-4">
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
      <div className="flex gap-2 mt-[20px]">
        <Link
          href={`/meeting/${meetingId}`}
          className="mt-2 text-center flex justify-center items-center bg-blue-300 w-[32%] h-[40px] rounded-sm shadow-lg text-white">
          게시글로 이동
        </Link>
        <button className="mt-2 bg-blue-300 w-[32%] h-[40px] rounded-sm shadow-lg text-white">
          모임톡 가기
        </button>
        <button
          onClick={() => {
            setModalOpen()
            setSelectedModal("newParticipate")
          }}
          className="mt-2 bg-blue-300 w-[32%] h-[40px] rounded-sm shadow-lg text-white">
          참가자 관리
        </button>
      </div>
      <ModalComponent className="w-full h-full">
        {selectedModal === "meetingOption" && <MeetingOptionModal />}
        {selectedModal === "newParticipate" && (
          <NewParticipateModal onClickModalCloseHandle={setModalClose} />
        )}
      </ModalComponent>
    </div>
  )
}

export default MyManagingMeetingItem
