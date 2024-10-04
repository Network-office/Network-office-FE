import { faker } from "@faker-js/faker"

const generateMockFeedData = (count: number, region: string[]) => {
  return Array.from({ length: count }, (_, index) => ({
    feedId: faker.number.int({ min: 1, max: 9999999999999 }).toString(),
    authorId: faker.number.int({ min: 1, max: 10 }),
    authorName: faker.internet.userName(),
    category: faker.helpers.arrayElement([
      "스포츠",
      "술",
      "음식",
      "여행",
      "기타"
    ]),
    title: faker.lorem.sentence().slice(0, 20),
    description: faker.lorem.sentences(3),
    region: [...region],
    date: faker.date.recent().toDateString(),
    views: faker.number.int({ min: 0, max: 1000 }),
    like: faker.number.int({ min: 0, max: 1000 })
  }))
}

const feedMockData = [
  ...generateMockFeedData(13, ["서울시", "구로구", "항동"]),
  ...generateMockFeedData(8, ["서울시", "구로구", "개봉동"]),
  ...generateMockFeedData(4, ["서울시", "관악구", "신림동"])
].sort((a, b) => parseInt(a.feedId) - parseInt(b.feedId))

export default feedMockData
