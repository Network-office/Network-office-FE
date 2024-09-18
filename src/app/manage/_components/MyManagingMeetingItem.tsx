"use client"

import Link from "next/link"

import { Users, Clock, Settings } from "lucide-react"
import useModal from "@/_common/_hooks/useModal"

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
  const { ModalComponent, setModalOpen } = useModal()

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
          <p>{date}</p>
          <p>/</p>
          <p>
            {startTime}~{endTime}
          </p>
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
          onClick={() => setModalOpen}
          className="mt-2 bg-blue-300 w-[32%] h-[40px] rounded-sm shadow-lg text-white">
          참가자 관리
        </button>
      </div>
      <ModalComponent className="w-full h-full">
        <div className="w-[90%] h-[280px] z-50 bg-white left-1/2 top-[30%] -translate-x-1/2 -translate-y-[30%] absolute rounded-sm  shadow-xl">
          <h1 className="text-xl px-4 py-4 font-medium ">모임 관리</h1>
          <div className="flex flex-col gap-4">
            <button className="w-[80%] h-[52px] bg-blue-200 rounded-md shadow-xl mx-auto font-semibold text-xl text-white">
              게시글 수정하기
            </button>
            <button className="w-[80%] h-[52px] bg-blue-200 rounded-md shadow-xl mx-auto font-semibold text-xl text-white">
              모집 마감하기
            </button>
            <button className="w-[80%] h-[52px] bg-blue-200 rounded-md shadow-xl mx-auto font-semibold text-xl text-white">
              모임 파토하기
            </button>
          </div>
        </div>
      </ModalComponent>
    </div>
  )
}

export default MyManagingMeetingItem
