"use client"

import { HeartOff } from "lucide-react"
import MeetingDetailHeader from "./_components/MeetingDetailHeader"
import MeetingContentSection from "./_components/MeetingContentSection"
import MeetingMapSection from "./_components/MeetingMapSection"

const meetingDetail: MeetingDetailTypes = {
  id: 1,
  author: "John Doe",
  title: "테스트 모임",
  place: "서울 강남구 주노동 준오아파트 103동 ",
  date: "2024-09-20",
  startTime: 10,
  endTime: 12,
  category: "스포츠",
  totalPeople: 10,
  nowPeople: 5,
  fee: 5000,
  detail: "이 모임은 함께 운동을 즐기기 위한 모임입니다.",
  y: 127.027619,
  x: 37.497942
}

const MeetingDetailPage = () => {
  return (
    <div className="w-screen h-screen">
      <MeetingDetailHeader title={meetingDetail.title} />
      <MeetingContentSection meetingDetail={meetingDetail} />
      <hr />
      <MeetingMapSection
        lat={meetingDetail.x}
        lng={meetingDetail.y}
        meetingId={meetingDetail.id}
        place={meetingDetail.place}
      />
      <div className="flex justify-between mx-6 mt-[20px]">
        <button>
          <HeartOff />
        </button>
        <button className="w-[150px] h-[40px] rounded-md bg-blue-300 text-white">
          참가신청
        </button>
      </div>
    </div>
  )
}

export default MeetingDetailPage
