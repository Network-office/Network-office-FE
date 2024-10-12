import ParticipatingMeetingItem from "./ParticipatingMeetingsItem"

const Participate = () => {
  return (
    <div className="w-screen h-screen">
      <h1 className="text-xl px-2 py-1">내가 참여 중인 모임</h1>
      <ul>
        <ParticipatingMeetingItem
          meetingId={1}
          title="a"
          date="1/1"
          startTime="1.1"
          endTime="1:00"
          nowPeople={4}
          totalPeople={8}
        />
      </ul>
    </div>
  )
}

export default Participate
