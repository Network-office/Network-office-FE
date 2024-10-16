import { faker } from "@faker-js/faker"

const userMockData = [
  {
    userId: "1",
    nickName: faker.internet.userName(),
    profileImg: null,
    profileIntroduce: "안녕하세요 하하하 잘부탁드려요",
    participatedMeetingList: ["sport", "movie", "sport", "coffee", "sport"]
  }
]

export default userMockData
