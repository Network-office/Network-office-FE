import { faker } from "@faker-js/faker"
import { users, TOTAL_FEEDS } from "./commonData"

const categories = ["스포츠", "문화", "정보"]
const dong = ["개봉동", "상동", "항동","항동","항동"]

export const getRandomCategory = () => {
  const randomIndex = Math.floor(Math.random() * categories.length)
  return categories[randomIndex]
}

export const getRandomDong = () => {
  const randomIndex = Math.floor(Math.random() * categories.length)
  return ["서울시", "구로구", dong[randomIndex]]
}

const feedMockData = Array.from({ length: TOTAL_FEEDS }, (_, index) => {
  const user = users[index % users.length]
  return {
    feedId: (index + 1).toString(),
    authorId: user.userId,
    author: user.nickName,
    title: faker.lorem.sentence(),
    detail: faker.lorem.paragraphs(),
    category: getRandomCategory(),
    authorProfileImage: user.profileImg,
    createdAt: faker.date.past().toISOString(),
    region: getRandomDong(),
    date: faker.date.recent().toISOString(),
    views: faker.number.int({ min: 0, max: 1000 }),
    likes: faker.number.int({ min: 0, max: 1000 })
  }
})

export default feedMockData
