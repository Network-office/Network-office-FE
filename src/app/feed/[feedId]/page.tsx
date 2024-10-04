import Topbar from "@/_common/_components/Topbar"
import FeedDetailContentSection from "./_components/FeedDetailContentSection"
import { faker } from "@faker-js/faker"

const generateMockFeedData = (count: number, region: string[]) => {
  return {
    feedId: faker.number.int({ min: 1, max: 9999999999999 }),
    authorId: faker.number.int({ min: 1, max: 10 }),
    authorName: faker.internet.userName().slice(0, 8),
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
  }
}

const feedDetail = generateMockFeedData(1, ["서울시", "구로구", "항동"])

const FeedDetailPage = () => {
  return (
    <div>
      <Topbar
        className="bg-green-300 border-none"
        leftContent={
          <div className="flex gap-4">
            <Topbar.BackLink />
            <p className="font-semibold text-xl text-white">
              {feedDetail.title}
            </p>
          </div>
        }
      />
      <FeedDetailContentSection {...feedDetail} />
      <div>
        <h1>{feedDetail.title}</h1>
      </div>
    </div>
  )
}

export default FeedDetailPage
