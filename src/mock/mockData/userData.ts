import { faker } from "@faker-js/faker"

const userMockData = [
  {
    id: "1",
    display_name: faker.internet.userName(),
    profile_image_url: null,
    profileIntroduce: "안녕하세요 하하하 잘부탁드려요",
    description: "안녕하세요 하하하 잘부탁드려요",
    social_id: "1",
    social_type: "kakao",
    participatedMeetingList: ["sport", "movie", "sport", "coffee", "sport"]
  }
]

export default userMockData
