import useGetParticipatingMeetingList from "../../_hooks/_quries/useGetParticipatingMeetings"
import ParticipatingMeetingItem from "./ParticipatingMeetingsItem"

const Participate = () => {
  const { data: participatingMeetings } = useGetParticipatingMeetingList(1)

  return (
    <div className="w-screen h-screen">
      <h1 className="text-xl px-2 py-1">내가 참여 중인 모임</h1>
      <ul>
        {participatingMeetings?.map((meetingItem) => (
          <li key={meetingItem.id}>
            <ParticipatingMeetingItem
              {...meetingItem}
              meetingId={meetingItem.id}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Participate
