import ProfileSection from "./_componets/ProfileSection"
import { faker } from "@faker-js/faker"
import MeetingSummarySection from "./_componets/MeetingSummarySection"

const mockData = {
  profileImgSrc: faker.image.avatar(),
  nickName: "김김김",
  profileIntroduce: "두줄소개 두줄 소개 두줄소개 ㅁㄴㅇㄹㅁㄴㅇㄹ"
}
const MyPage = () => {
  return (
    <div>
      <ProfileSection {...mockData} />
      <MeetingSummarySection />
    </div>
  )
}

export default MyPage
