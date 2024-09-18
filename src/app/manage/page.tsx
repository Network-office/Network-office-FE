"use client"

import MyManagingMeetingItem from "./_components/MyManagingMeetingItem"

const mockData = [
  {
    title: "축구할사람 구해요",
    date: "오늘",
    startTime: "09:00",
    endTime: "11:00",
    totalPeople: 20,
    nowPeople: 16,
    meetingId: 1
  },
  {
    title: "야구할사람 구해요",
    date: "내일",
    startTime: "19:00",
    endTime: "20:00",
    totalPeople: 20,
    nowPeople: 16,
    meetingId: 1
  }
]

const Manage = () => {
  return (
    <div className="w-screen h-screen">
      <h1 className="text-xl px-2 py-1">관리중인 모임</h1>
      {mockData.map((meetingItem) => (
        <MyManagingMeetingItem {...meetingItem} />
      ))}
    </div>
  )
}

export default Manage
