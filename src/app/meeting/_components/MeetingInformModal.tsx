interface MeetingInformModalProps {
  meetingData: {
    title: string
    place: string
    fare: string
    startTime: string
    endTime: string
  }
  onClickCloseButton: () => void
}

const MeetingInformModal = ({
  meetingData,
  onClickCloseButton
}: MeetingInformModalProps) => {
  return (
    <div>
      <p>{meetingData.title}</p>
      <p>{meetingData.place}</p>
      <p>{meetingData.fare}</p>
      <p>{meetingData.startTime}</p>
      <p>{meetingData.endTime}</p>
    </div>
  )
}

export default MeetingInformModal
