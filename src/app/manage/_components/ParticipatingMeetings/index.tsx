import { useEffect } from "react"
import useGetParticipatingMeetingList from "../../_hooks/_quries/useGetParticipatingMeetings"
import ParticipatingMeetingItem from "./ParticipatingMeetingsItem"

interface ParticipateProps {
  setMyParticipaiteMeetingNum: (num: number) => void
}

const Participate = ({ setMyParticipaiteMeetingNum }: ParticipateProps) => {
  const { data: participatingMeetings } = useGetParticipatingMeetingList(1)

  useEffect(() => {
    if (participatingMeetings) {
      setMyParticipaiteMeetingNum(participatingMeetings.length)
    }
  }, [participatingMeetings, setMyParticipaiteMeetingNum])

  return (
    <div className="w-screen h-fit mb-4">
      <ul>
        {participatingMeetings?.map((meetingItem) => (
          <li
            className="participatingMeetingItem"
            key={meetingItem.id}>
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
