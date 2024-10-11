"use client"
import { usePathname } from "next/navigation"

import { HeartOff } from "lucide-react"
import MeetingDetailHeader from "./_components/MeetingDetailHeader"
import MeetingContentSection from "./_components/MeetingContentSection"
import MeetingMapSection from "./_components/MeetingMapSection"
import useGetMeetingDetail from "./_hooks/_quries/useGetMeetingDetail"
import MeetingParticipateModal from "./_components/MeetingParticipateModal"
import useModal from "@/_common/_hooks/useModal"
import Button from "@/_common/_components/Button"

const MeetingDetailPage = () => {
  const path = usePathname()
  const nowPageId = parseInt(path.slice(9))
  const { data: meetingDetail } = useGetMeetingDetail(nowPageId)
  const { ModalComponent, setModalOpen, setModalClose } = useModal()

  if (!meetingDetail) return <div></div>

  return (
    <div className="w-screen h-screen ">
      <MeetingDetailHeader title={meetingDetail.title} />
      <MeetingContentSection meetingDetail={meetingDetail} />
      <hr />
      <MeetingMapSection
        lat={meetingDetail.lat}
        lng={meetingDetail.lng}
        meetingId={meetingDetail.id}
        place={meetingDetail.place}
      />
      <hr className="my-1" />
      <div className="w-screen flex justify-between px-6 pb-[4.5rem]">
        <button>
          <HeartOff />
        </button>
        <Button
          onClick={setModalOpen}
          className="w-[150px] h-[40px] rounded-md text-white">
          참가신청
        </Button>
      </div>
      <ModalComponent className="bg-white w-[380px] h-[300px] rounded-sm shadow-2xl px-4 py-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <MeetingParticipateModal
          meetingId={meetingDetail.id}
          onMeetingModalClose={setModalClose}
        />
      </ModalComponent>
    </div>
  )
}

export default MeetingDetailPage
