"use client"

import FeedItem from "./FeedItem"
import useInfiniteScroll from "@/_common/_hooks/useInfiniteScroll"
import useGetFeedList from "../_hooks/_quries/useGetFeedList"
import { useEffect, useState } from "react"
import { Ghost } from "lucide-react"
import Loading from "@/app/mypage/loading"
import BaseErrorContent from "@/_common/_components/ErrorBoundary/BaseErrorContent"

interface FeedBoardProps {
  region: string
}

const FeedBoard = ({ region }: FeedBoardProps) => {
  const {
    data: feedList,
    fetchNextPage,
    isFetched = false,
    isError
  } = useGetFeedList(region, 10)

  const { ref } = useInfiniteScroll(fetchNextPage)

  const [isFetch, setIsFetch] = useState(false)

  useEffect(() => {
    if (isFetched) {
      setIsFetch(true)
    }
  }, [isFetched])

  if (isError)
    return (
      <BaseErrorContent
        status={500}
        className="h-[500px]"
      />
    )

  return (
    <div>
      <ul className="w-full h-[500px]">
        {isFetch &&
          feedList.length > 0 &&
          feedList.map((item) => (
            <li
              className="w-full"
              key={item.feedId}>
              <FeedItem {...item} />
            </li>
          ))}

        {isFetch && feedList.length === 0 && (
          <div className=" w-screen">
            <Ghost className="w-[35%] h-[35%] mt-[150px] mx-auto text-gray-500" />
            <p className="text-xl font-semibold text-center mt-4">
              아직 작성된글이 없습니다.
            </p>
          </div>
        )}
        {!isFetch && <Loading />}
        <div ref={ref} />
      </ul>
    </div>
  )
}

export default FeedBoard
