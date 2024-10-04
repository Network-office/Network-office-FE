"use client"

import { Suspense } from "react"
import { usePathname } from "next/navigation"
import FeedCommentSection from "./_components/FeedCommentSection"
import FeedDetailContent from "./_components/FeedDetailContent"
import FeedCommentInputBar from "./_components/FeedCommentInputBar"
import FeedDetailLoading from "./_components/loading/FeedDetailLoading"

const FeedDetailPage = () => {
  const pathName = usePathname()
  const feedId = pathName.slice(6)

  return (
    <div className="relative w-screen h-screen">
      <Suspense fallback={<FeedDetailLoading />}>
        <FeedDetailContent feedId={feedId} />
      </Suspense>
      <FeedCommentSection feedId={feedId} />
      <FeedCommentInputBar />
    </div>
  )
}

export default FeedDetailPage
