import { faker } from "@faker-js/faker"

export const TOTAL_USERS = 50
export const TOTAL_FEEDS = 25
export const TOTAL_MEETINGS = 2000

export const CATEGORIES = ["스포츠", "술", "음식", "여행", "기타"]

export const users = Array.from({ length: TOTAL_USERS }, (_, index) => ({
  userId: (index + 1).toString(),
  nickName: faker.internet.userName(),
  profileImg: null,
  profileIntroduce: faker.lorem.sentence(),
  participatedMeetingList: faker.helpers.arrayElements(CATEGORIES, {
    min: 1,
    max: 5
  })
}))

export const getUser = (userId: string) =>
  users.find((user) => user.userId === userId) || users[0]

export const generateUserId = () =>
  faker.number.int({ min: 1, max: TOTAL_USERS }).toString()

export const generateUserData = (userId: string) => ({
  userId,
  nickName: faker.internet.userName(),
  profileImg: null,
  profileIntroduce: faker.lorem.sentence(),
  participatedMeetingList: faker.helpers.arrayElements(CATEGORIES, {
    min: 1,
    max: 5
  })
})

export const generateDate = () => faker.date.recent().toISOString()

export const generateRegion = () =>
  faker.helpers.arrayElement([
    ["서울시", "구로구", "항동"],
    ["서울시", "구로구", "개봉동"],
    ["서울시", "관악구", "신림동"]
  ])
