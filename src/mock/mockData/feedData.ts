import { faker } from "@faker-js/faker"
import { users, TOTAL_FEEDS } from "./commonData"

const feedMockData = Array.from({ length: TOTAL_FEEDS }, (_, index) => {
  const user = users[index % users.length]
  return {
    feedId: (index + 1).toString(),
    authorId: user.userId,
    author: user.nickName,
    title: faker.lorem.sentence(),
    detail: faker.lorem.paragraphs(),
    authorProfileImage: user.profileImg,
    createdAt: faker.date.past().toISOString(),
    region: ["서울시", "구로구", "항동"],
    date: faker.date.recent().toISOString(),
    views: faker.number.int({ min: 0, max: 1000 }),
    likes: faker.number.int({ min: 0, max: 1000 })
  }
})

export default feedMockData
