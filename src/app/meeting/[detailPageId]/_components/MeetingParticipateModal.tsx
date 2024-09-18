interface MeetingParticipateModalProps {
  onMeetingModalHandle: () => void
}

const MeetingParticipateModal = ({
  onMeetingModalHandle
}: MeetingParticipateModalProps) => {
  return (
    <>
      <h1 className="text-xl font-semibold px-1 ">모임 참가 신청</h1>
      <textarea
        placeholder="모임 소장님에게 보낼 참가신청 메세지를 작성해주세요. ex) 자기소개"
        className="w-[350px] h-[180px] mt-2 border-[1px] rounded-sm px-2 py-2 focus:outline-none"
      />
      <div className="flex justify-between px-2 mt-2">
        <button className="w-[48%] h-[35px] rounded-sm shadow-lg bg-blue-200 text-white font-semibold">
          신청
        </button>
        <button className="w-[48%] h-[35px] rounded-sm shadow-lg bg-blue-200 text-white font-semibold">
          취소
        </button>
      </div>
    </>
  )
}

export default MeetingParticipateModal
