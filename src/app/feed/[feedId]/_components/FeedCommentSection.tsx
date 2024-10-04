import { faker } from "@faker-js/faker"

import FeedCommentItem from "./FeedCommentItem"

const generateMockFeed채CommentData = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    commendId: faker.number.int({ min: 1, max: 99999999 }),
    authorId: faker.number.int({ min: 1, max: 10 }),
    author: faker.internet.userName().slice(0, 8),
    detail: faker.lorem.sentences(3),
    authorProfileImage: null,
    createdAt: faker.date.past().toDateString()
  }))
}
const feedComment = generateMockFeed채CommentData(5)

const FeedCommentSection = () => {
  return (
    <div className="border-t-2 mx-auto w-[90%]">
      <div className="flex gap-1">
        <p className="text-lg font-semibold mt-2">댓글</p>
        <p className="text-lg my-auto mt-2">
          {feedComment.length ? `(${feedComment.length})` : null}
        </p>
      </div>
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
