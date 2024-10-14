import MyManagingMeetingItem from "./MyManagingMeetingItem"
import useGetCreatedMeetingList from "../../_hooks/_quries/useGetCreatedMeetingList"

const CreatedMeetings = () => {
  const { data: createdMeetingList } = useGetCreatedMeetingList(1)
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
