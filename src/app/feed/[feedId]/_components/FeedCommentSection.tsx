import { faker } from "@faker-js/faker"

import FeedCommentItem from "./FeedCommentItem"

const generateMockFeed채CommentData = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    commendId: faker.number.int({ min: 1, max: 99999999 }),
    authorId: faker.number.int({ min: 1, max: 10 }),
    author: faker.internet.userName().slice(0, 8),
    detail: faker.lorem.sentences(3),
    authorProfileImage: null
  }))
}
const feedComment = generateMockFeed채CommentData(5)

const FeedCommentSection = () => {
  return (
    <div className="border-t-2 mx-auto w-[90%]">
      <h1 className="text-lg font-semibold mt-2">댓글</h1>
      <ul>
        {feedComment.map((item) => (
          <li key={item.commendId}>
            <FeedCommentItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeedCommentSection
