import { faker } from "@faker-js/faker"
import { FeedCommentType } from "../../app/feed/types"

const generateMockComments = (count: number): FeedCommentType[] => {
  return Array.from({ length: count }, (_, index) => ({
    commentId: faker.number.int({ min: 1, max: 99999999 }),
    authorId: faker.number.int({ min: 1, max: 10 }),
    author: faker.internet.userName().slice(0, 8),
    detail: faker.lorem.sentences(3),
    authorProfileImage: faker.image.avatar(),
    createdAt: faker.date.past().toISOString()
  }))
}

const commentMockData: { [key: string]: FeedCommentType[] } = {}

import feedMockData from "./feedData"

feedMockData.forEach((feed) => {
  commentMockData[feed.feedId] = generateMockComments(
    faker.number.int({ min: 1, max: 10 })
  )
})

export default commentMockData
