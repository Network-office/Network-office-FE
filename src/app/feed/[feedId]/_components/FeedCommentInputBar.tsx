"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import usePostFeedComment from "../_hooks/_mutations/usePostFeedComment"

interface FeedCommentInputBarProps {
  feedId: string
}

const FeedCommentInputBar = ({ feedId }: FeedCommentInputBarProps) => {
  const [comment, setComment] = useState("")
  const { mutate } = usePostFeedComment(feedId)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (comment.trim() && comment.length) {
      mutate({ comment })
      setComment("")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed w-screen bg-slate-200 h-[50px] bottom-0 left-0 flex justify-center gap-2 items-center">
      <input
        className="w-[85%] h-[80%] border-2 px-2 rounded-lg"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 입력하세요..."
      />
      <button
        type="submit"
        className="flex items-center">
        <Send />
      </button>
    </form>
  )
}

export default FeedCommentInputBar
