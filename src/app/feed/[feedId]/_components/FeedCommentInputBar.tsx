"use client"

import { Send } from "lucide-react"

const FeedCommentInputBar = () => {
  const onClickSendButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <form className="fixed w-screen bg-slate-200 h-[50px] bottom-0 left-0 flex justify-center gap-2 items-center">
      <input className="w-[85%] h-[80%] border-2 px-2 rounded-lg" />
      <button
        type="submit"
        onSubmit={onClickSendButton}
        className="flex items-center">
        <Send />
      </button>
    </form>
  )
}

export default FeedCommentInputBar
