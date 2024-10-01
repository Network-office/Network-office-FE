import FeedItem from "./FeedItem"
import useInfiniteScroll from "@/_common/_hooks/useInfiniteScroll"
import useGetFeedList from "../_hooks/_quries/useGetFeedList"
import { Star } from "lucide-react"

interface FeedBoardProps {
  region: string
}

const FeedBoard = ({ region }: FeedBoardProps) => {
  const { data: feedList = [], refetch, isFetched } = useGetFeedList(region, 10)
  const { ref } = useInfiniteScroll(refetch)
  return (
    <div>
      <div className="flex w-[90%] mt-3 mb-5 h-[40px] px-4 mx-auto rounded-lg bg-slate-100 gap-2">
        <Star className="my-auto w-4 h-4 text-yellow-400" />
        <p className="flex items-center font-medium">
          {region}의 인기글을 모두 모았어요!
        </p>
      </div>
      <ul>
        {isFetched && feedList.length > 0 ? (
          feedList.map((item) => (
            <li key={item.feedId}>
              <FeedItem {...item} />
            </li>
          ))
        ) : (
          <li>로딩 중...</li>
        )}
      </ul>
      <div ref={ref} />
    </div>
  )
}

export default FeedBoard
