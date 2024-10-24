import { faker } from "@faker-js/faker"
import { FeedCommentType } from "../../app/feed/types"
import feedMockData from "./feedData"
import { users } from "./commonData"

const generateMockComments = (count: number): FeedCommentType[] => {
  return Array.from({ length: count }, (_, index) => {
    const user = users[index % users.length]
    return {
      commentId: faker.number.int({ min: 1, max: 99999999 }).toString(),
      authorId: user.userId,
      author: user.nickName,
      detail: faker.lorem.sentences(3),
      authorProfileImage: user.profileImg,
      createdAt: faker.date.past().toISOString(),
      region: ["서울시", "구로구", "항동"],
      date: faker.date.recent().toISOString(),
      views: faker.number.int({ min: 0, max: 1000 })
    }
  })
}

const commentMockData: { [key: string]: FeedCommentType[] } = {}

feedMockData.forEach((feed) => {
  commentMockData[feed.feedId] = generateMockComments(
    faker.number.int({ min: 1, max: 10 })
  )
})

export default commentMockData
