import MyManagingMeetingItem from "./MyManagingMeetingItem"
import useGetCreatedMeetingList from "../../_hooks/_quries/useGetCreatedMeetingList"

interface CreatedMeetingsProps {
  setMyCreatedMeetingNum: (num: number) => void
}

const CreatedMeetings = ({ setMyCreatedMeetingNum }: CreatedMeetingsProps) => {
  const { data: createdMeetingList } = useGetCreatedMeetingList(1)

  setMyCreatedMeetingNum(createdMeetingList?.length || 0)

  return (
    <div className="w-screen h-fit mb-6">
      <ul>
        {createdMeetingList?.map((meetingItem) => (
          <li key={meetingItem.meetingId}>
            <MyManagingMeetingItem {...meetingItem} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CreatedMeetings
