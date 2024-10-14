import useGetParticipatingMeetingList from "../../_hooks/_quries/useGetParticipatingMeetings"
import ParticipatingMeetingItem from "./ParticipatingMeetingsItem"

const Participate = () => {
  const { data: participatingMeetings } = useGetParticipatingMeetingList(1)

  return (
    <div className="w-screen h-fit mb-6">
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
