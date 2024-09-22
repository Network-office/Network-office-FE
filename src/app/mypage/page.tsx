import ProfileSection from "./_componets/ProfileSection"
import Topbar from "@/_common/_components/Topbar"
import { faker } from "@faker-js/faker"

const mockData = {
  profileImgSrc: faker.image.avatar(),
  nickName: "김김김",
  profileIntroduce: "두줄소개 두줄 소개 두줄소개 ㅁㄴㅇㄹㅁㄴㅇㄹ"
}
const MyPage = () => {
  return (
    <div>
      <ProfileSection {...mockData} />
      <div></div>
    </div>
  )
}

export default MyPage
