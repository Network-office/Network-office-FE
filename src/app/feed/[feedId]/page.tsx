"use client"

import { Suspense } from "react"
import { usePathname } from "next/navigation"
import FeedCommentSection from "./_components/FeedCommentSection"
import FeedDetailContent from "./_components/FeedDetailContent"
import FeedCommentInputBar from "./_components/FeedCommentInputBar"
import FeedDetailLoading from "./_components/loading/FeedDetailLoading"
import FeedCommentsLoading from "./_components/loading/FeedCommentsLoading"
import ErrorBoundary from "@/_common/_components/ErrorBoundary"

const FeedDetailPage = () => {
  const pathName = usePathname()
  const feedId = pathName.slice(6)

  return (
    <div className="relative w-screen h-screen">
      <ErrorBoundary>
        <Suspense fallback={<FeedDetailLoading />}>
          <FeedDetailContent feedId={feedId} />
        </Suspense>
        <Suspense fallback={<FeedCommentsLoading />}>
          <FeedCommentSection feedId={feedId} />
        </Suspense>
      </ErrorBoundary>
      <FeedCommentInputBar feedId={feedId} />
    </div>
  )
}

export default FeedDetailPage
