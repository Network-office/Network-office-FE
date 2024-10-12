import MyManagingMeetingItem from "./MyManagingMeetingItem"
import useGetCreatedMeetingList from "../../_hooks/_quries/useGetCreatedMeetingList"

const CreatedMeetings = () => {
  const { data: createdMeetingList } = useGetCreatedMeetingList(1)
  return (
    <div>
      <h1 className="text-xl px-2 py-1">내가 개설한 모임</h1>
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
