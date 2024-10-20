"use client"

import ProfileSection from "./_componets/ProfileSection"
import MeetingSummarySection from "./_componets/MeetingSummarySection"
import MyPageTopBar from "./_componets/MyPageTobbar"
import MyPageMenuSection from "./_componets/MyPageMenuSection"
import useGetUserInform from "./_hooks/_quries/useGetUserInform"

const MyPage = () => {
  const { data: userInform } = useGetUserInform()

  if (!userInform) return null

  return (
    <div>
      <MyPageTopBar />
      <ProfileSection {...userInform} />
      <MeetingSummarySection
        participatedMeetingList={userInform.participatedMeetingList}
      />
      <MyPageMenuSection />
    </div>
  )
}

export default MyPage
