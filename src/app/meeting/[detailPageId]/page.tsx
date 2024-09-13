"use client"
import { usePathname } from "next/navigation"

import { HeartOff } from "lucide-react"
import MeetingDetailHeader from "./_components/MeetingDetailHeader"
import MeetingContentSection from "./_components/MeetingContentSection"
import MeetingMapSection from "./_components/MeetingMapSection"
import useGetMeetingDetail from "./_hooks/_quries/useGetMeetingDetail"

const MeetingDetailPage = () => {
  const path = usePathname()
  const nowPageId = parseInt(path.slice(9))
  const { data: meetingDetail } = useGetMeetingDetail(nowPageId)

  if (!meetingDetail) return <div></div>

  return (
    <div className="w-screen h-screen">
      <MeetingDetailHeader title={meetingDetail.title} />
      <MeetingContentSection meetingDetail={meetingDetail} />
      <hr />
      <MeetingMapSection
        lat={meetingDetail.lat}
        lng={meetingDetail.lng}
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
