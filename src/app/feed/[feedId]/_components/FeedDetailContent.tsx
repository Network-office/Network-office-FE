"use client"

import Topbar from "@/_common/_components/Topbar"
import useGetFeedDetail from "../_hooks/useGetFeedDetail"
import FeedDetailContentSection from "./FeedDetailContentSection"

const FeedDetailContent = ({ feedId }: { feedId: string }) => {
  const { data: feedDetail } = useGetFeedDetail(feedId)

  if (!feedDetail) return null

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
    </div>
  )
}

export default FeedDetailContent
