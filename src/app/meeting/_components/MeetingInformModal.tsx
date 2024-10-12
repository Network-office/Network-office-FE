"use client"

import Link from "next/link"
import dateToString from "@/_common/_utils/dateToString"

interface MeetingInformModalProps {
  meetingData: {
    id: number
    title: string
    place: string
    fee: string
    totalPeople: number
    date: string
    nowPeople: number
    startTime: string
    endTime: string
  }
}

const MeetingInformModal = ({ meetingData }: MeetingInformModalProps) => {
  return (
    <div className="bg-white w-screen h-[16rem] rounded-md border-t-[2px] border-slate-400">
      <div className="mx-auto">
        <p className="text-xl font-bold text-center mt-4">
          {meetingData.title}
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <p>
            총
            <span className="text-green-400 font-semibold">
              {` ${meetingData.totalPeople}명 `}
            </span>
            모임 성사까지
          </p>
          <p className="text-yellow-400">
            {meetingData.totalPeople - meetingData.nowPeople}자리 남음
          </p>
        </div>
      </div>
      <div className="flex w-[80%] justify-between mx-auto mt-4">
        <label className="font-semibold">위치</label>
        <p>{meetingData.place}</p>
      </div>
      <div className="flex w-[80%] justify-between mx-auto">
        <label className="font-semibold">참가비</label>
        <p>
          {meetingData.fee !== "없음"
            ? `${meetingData.fee} ₩`
            : meetingData.fee}
        </p>
      </div>
      <div className="flex w-[80%] justify-between mx-auto">
        <label className="font-semibold">일시 / 활동시간</label>
        <p>
          {dateToString(meetingData.date)} | {meetingData.startTime}~
          {meetingData.endTime}
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Link
          href={`/meeting/${meetingData.id}`}
          className="w-[311px] h-[40px] bg-[#D58787] text-white font-bold rounded-sm flex items-center justify-center">
          <span className="text-semibold">모임 상세보기</span>
        </Link>
      </div>
    </div>
  )
}

export default MeetingInformModal
