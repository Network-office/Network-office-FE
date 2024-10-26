import MyMessageGroupSkeleton from "@/app/chat/[chatId]/_components/skeletons/MyMessageGroupSkeleton"
import OtherMessageGroupSkeleton from "@/app/chat/[chatId]/_components/skeletons/OtherMessageGroupSkeleton"
import React from "react"

const ChatPageLoading = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <React.Fragment key={idx}>
          {idx % 2 === 0 ? (
            <OtherMessageGroupSkeleton />
          ) : (
            <MyMessageGroupSkeleton />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ChatPageLoading
