"use client"

import UserIntroducerSection from "./UserIntroducerSection"
import MeetingSummarySection from "./MeetingSummarySection"
import useGetUserInform from "../_hooks/_quries/useGetUserInform"

const MyPageClient = () => {
  const { data: userInform } = useGetUserInform()

  if (!userInform) return null
  return (
    <>
      <UserIntroducerSection
        profileImg={userInform.profile_image_url}
        nickName={userInform.display_name}
        profileIntroduce={userInform.description}
      />
      <MeetingSummarySection
        participatedMeetingList={userInform.participatedMeetingList ?? []}
      />
    </>
  )
}

export default MyPageClient
