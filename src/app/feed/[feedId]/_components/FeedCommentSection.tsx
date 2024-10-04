import useGetFeedComments from "../_hooks/useGetFeedComments"
import FeedCommentItem from "./FeedCommentItem"

interface FeedCommentSectionProps {
  feedId: string
}

const FeedCommentSection = ({ feedId }: FeedCommentSectionProps) => {
  const { data: feeComments } = useGetFeedComments(feedId)
  return (
    <div className="border-t-2 mx-auto w-[90%]">
      <div className="flex gap-1">
        <p className="text-lg font-semibold mt-2">댓글</p>
        <p className="text-lg my-auto mt-2">
          {feeComments.length ? `(${feeComments.length})` : null}
        </p>
      </div>
      <ul>
        {feeComments.map((item) => (
          <li key={item.commentId}>
            <FeedCommentItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeedCommentSection
