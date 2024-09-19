"use client"

import MyManagingMeetingItem from "./_components/MyManagingMeetingItem"
import getCreatedMeetingList from "./_hooks/_quries/getCreatedMeetingList"

const Manage = () => {
  const { data: mockData } = getCreatedMeetingList(1)

  if (!mockData) return <></>
  return (
    <div className="w-screen h-screen">
      <h1 className="text-xl px-2 py-1">관리중인 모임</h1>
      <ul>
        {mockData.map((meetingItem) => (
          <li key={meetingItem.meetingId}>
            <MyManagingMeetingItem {...meetingItem} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Manage
