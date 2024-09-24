import ProfileSection from "./_componets/ProfileSection"
import { faker } from "@faker-js/faker"
import MeetingSummarySection from "./_componets/MeetingSummarySection"
import MyPageTopBar from "./_componets/MyPageTobbar"

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
    </div>
  )
}

export default MyPage
