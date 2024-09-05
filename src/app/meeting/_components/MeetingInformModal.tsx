interface MeetingInformModalProps {
  meetingData: {
    title: string
    place: string
    fare: string
    totalPeople: number
    vacancy: number
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
          <p>총 {meetingData.totalPeople}명 모임 성사까지</p>
          <p className="text-yellow-400">{meetingData.vacancy}자리 남음</p>
        </div>
      </div>
      <div className="flex w-[80%] justify-between mx-auto mt-4">
        <label>위치</label>
        <p>{meetingData.place}</p>
      </div>
      <div className="flex w-[80%] justify-between mx-auto">
        <label>참가비</label>
        <p>{meetingData.fare}</p>
      </div>
      <div className="flex w-[80%] justify-between mx-auto">
        <label>모임시간</label>
        <p>
          {meetingData.startTime}~{meetingData.endTime}
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <button className="w-[311px] h-[40px] bg-[#D58787] text-white text-center rounded-sm">
          모임 상세보기
        </button>
      </div>
    </div>
  )
}

export default MeetingInformModal
