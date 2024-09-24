import ProfileSection from "./_componets/ProfileSection"
import { faker } from "@faker-js/faker"
import MeetingSummarySection from "./_componets/MeetingSummarySection"
import MyPageTopBar from "./_componets/MyPageTobbar"
import MyPageMenuSection from "./_componets/MyPageMenuSection"

const mockData = {
  profileImgSrc: faker.image.avatar(),
  nickName: "김김김",
  profileIntroduce: "두줄소개 두줄 소개 두줄소개 ㅁㄴㅇㄹㅁㄴㅇㄹ",
  meetingList: ["sport", "beer", "sport", "movie", "food"]
}
const MyPage = () => {
  return (
    <div>
      <MyPageTopBar />
      <ProfileSection {...mockData} />
      <MeetingSummarySection meetingList={mockData.meetingList} />
      <MyPageMenuSection />
    </div>
  )
}

export default MyPage
