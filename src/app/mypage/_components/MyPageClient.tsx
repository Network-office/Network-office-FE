"use client"

import ProfileSection from "../_componets/ProfileSection"
import MeetingSummarySection from "../_componets/MeetingSummarySection"
import MyPageTopBar from "../_componets/MyPageTobbar"
import MyPageMenuSection from "../_componets/MyPageMenuSection"
import useGetUserInform from "../_hooks/_quries/useGetUserInform"

const MyPageClient = () => {
  const { data: userInform, isLoading } = useGetUserInform()

  if (isLoading) return <div>로딩중...</div>
  if (!userInform) return null

  return (
    <div>
      <MyPageTopBar />
      <ProfileSection
        profileImg={userInform.profile_image_url}
        nickName={userInform.display_name}
        profileIntroduce={userInform.description}
      />
      <MeetingSummarySection
        participatedMeetingList={userInform.participatedMeetingList ?? []}
      />
      <MyPageMenuSection />
    </div>
  )
}

export default MyPageClient
