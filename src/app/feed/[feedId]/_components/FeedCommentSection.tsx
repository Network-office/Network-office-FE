import { useRef, useEffect, useState } from "react"
import useGetFeedComments from "../_hooks/_quries/useGetFeedComments"
import FeedCommentItem from "./FeedCommentItem"

interface FeedCommentSectionProps {
  feedId: string
}

const FeedCommentSection = ({ feedId }: FeedCommentSectionProps) => {
  const { data: feedComments } = useGetFeedComments(feedId)
  const commentsEndRef = useRef<HTMLDivElement>(null)
  const [shouldScroll, setShouldScroll] = useState(false)

  const scrollToBottom = () => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleCommentAdded = () => setShouldScroll(true)
    window.addEventListener("commentAdded", handleCommentAdded)
    return () => window.removeEventListener("commentAdded", handleCommentAdded)
  }, [])

  useEffect(() => {
    if (shouldScroll) {
      scrollToBottom()
      setShouldScroll(false)
    }
  }, [feedComments, shouldScroll])

  return (
    <div className="border-t-2 mx-auto w-[90%] pb-[120px] ">
      <div className="flex gap-1">
        <p className="text-lg font-semibold mt-2">댓글</p>
        <p className="text-lg my-auto mt-2">
          {feedComments.length ? `(${feedComments.length})` : null}
        </p>
      </div>
      <ul>
        {feedComments.map((item) => (
          <li key={item.commentId}>
            <FeedCommentItem {...item} />
          </li>
        ))}
      </ul>
      <div ref={commentsEndRef} />
    </div>
  )
}

export default FeedCommentSection
