interface MeetingContentSectionProps {
  meetingDetail: MeetingDetailTypes
}

const MeetingContentSection = ({
  meetingDetail
}: MeetingContentSectionProps) => {
  return (
    <div>
      <table className="w-[350px] mx-auto px-2 mt-2">
        <tbody>
          <tr>
            <td className="text-[#A1824A] p-2">소장</td>
            <td>{meetingDetail.author}</td>
            <td className="text-[#A1824A] p-2">카테고리</td>
            <td>{meetingDetail.category}</td>
          </tr>
          <tr>
            <td className="text-[#A1824A] p-2">날짜</td>
            <td>{meetingDetail.date.toString()}</td>
            <td className="text-[#A1824A] p-2">활동 시간</td>
            <td>
              {meetingDetail.startTime.toString()} ~{" "}
              {meetingDetail.endTime.toString()}
            </td>
          </tr>
          <tr>
            <td className="text-[#A1824A] p-2">모집 인원</td>
            <td>{meetingDetail.totalPeople.toString()}</td>
            <td className="text-[#A1824A] p-2">현재 인원</td>
            <td>{meetingDetail.nowPeople.toString()}</td>
          </tr>
          <tr>
            <td className="text-[#A1824A] p-2">참가비</td>
            <td>{meetingDetail.fee.toString()}원</td>
          </tr>
        </tbody>
      </table>
      <hr className="w-[90%] mx-auto mt-3" />
      <div className="mt-[30px] w-[350px] mx-auto min-h-[300px]">
        <span>{meetingDetail.detail}</span>
      </div>
    </div>
  )
}

export default MeetingContentSection
