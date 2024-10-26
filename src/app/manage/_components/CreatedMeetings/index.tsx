import { useEffect } from "react"
import useGetCreatedMeetingList from "../../_hooks/_quries/useGetCreatedMeetingList"
import MyManagingMeetingItem from "./MyManagingMeetingItem"

interface CreatedMeetingsProps {
  setMyCreatedMeetingNum: (num: number) => void
}

const CreatedMeetings = ({ setMyCreatedMeetingNum }: CreatedMeetingsProps) => {
  const { data: createdMeetings } = useGetCreatedMeetingList(1)

  useEffect(() => {
    if (createdMeetings) {
      setMyCreatedMeetingNum(createdMeetings.length)
    }
  }, [createdMeetings, setMyCreatedMeetingNum])

  return (
    <div className="w-screen h-fit mb-4">
      <ul>
        {createdMeetings?.map((meetingItem) => (
          <li
            className="createdMeetingItem"
            key={meetingItem.id}>
            <MyManagingMeetingItem
              {...meetingItem}
              meetingId={meetingItem.id}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CreatedMeetings
