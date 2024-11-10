"use client"

import ProfileSection from "./_components/ProfileSection"
import MeetingSummarySection from "./_components/MeetingSummarySection"
import MyPageTopBar from "./_components/MyPageTobbar"
import MyPageMenuSection from "./_components/MyPageMenuSection"
import useGetUserInform from "./_hooks/_quries/useGetUserInform"

const MyPageClient = () => {
  const { data: userInform } = useGetUserInform()

  return (
    <div>
      <MyPageTopBar />
      <ProfileSection
        profileImg={userInform.profileImg}
        nickName={userInform.nickName}
        profileIntroduce=""
      />
      <MeetingSummarySection
        participatedMeetingList={userInform.participatedMeetingList ?? []}
      />
      <MyPageMenuSection />
    </div>
  )
}

export default MyPageClient
