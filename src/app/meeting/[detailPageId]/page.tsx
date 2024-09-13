import MeetingDetailHeader from "./_components/MeetingDetailHeader"
import MeetingContentSection from "./_components/MeetingContentSection"

const meetingDetail: MeetingDetailTypes = {
  id: 1,
  author: "John Doe",
  title: "테스트 모임",
  place: "서울 강남구 어딘가",
  date: "2024-09-20",
  startTime: 10,
  endTime: 12,
  category: "스포츠",
  totalPeople: 10,
  nowPeople: 5,
  fee: 5000,
  detail: "이 모임은 함께 운동을 즐기기 위한 모임입니다.",
  x: 127.027619,
  y: 37.497942
}

const MeetingDetailPage = () => {
  return (
    <div>
      <MeetingDetailHeader title={meetingDetail.title} />
      <MeetingContentSection meetingDetail={meetingDetail} />
    </div>
  )
}

export default MeetingDetailPage
