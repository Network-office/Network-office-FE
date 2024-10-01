import FeedItem from "./FeedItem"
import { Star } from "lucide-react"

const MockData = [
  {
    feedId: 1,
    authorId: 1,
    authorName: "김댕댕",
    category: "스포츠",
    title: "여기는 그냥 게시판 느낌? 다른 동네도 구경하고 이슈도 확인",
    description:
      "하이마트 맞은편 편의점 테라스에서 소소하게 대화하며 맥주마실 분 구해요하이마트 맞은편 편의점 테라스에서 소소하게 대화하며 맥주마실 분 구해요..",
    region: "항동",
    date: "하루전",
    views: 124
  },
  {
    id: 2,
    authorName: "김댕댕",
    authorId: 1,
    category: "술",
    title: "으라차차차",
    description:
      "하이마트 맞은편 편의점 테라스에서 소소하게 대화하며 맥주마실 분 구해요하이마트 맞은편 편의점 테라스에서 소소하게 대화하며 맥주마실 분 구해요..",
    region: "항동",
    date: "하루전",
    views: 122
  }
]

interface FeedBoardProps {
  region: string
}

const FeedBoard = ({ region }: FeedBoardProps) => {
  return (
    <div>
      <div className="flex w-[90%] mt-3 mb-5 h-[40px] px-4 mx-auto  rounded-lg bg-slate-100 gap-2">
        <Star className="my-auto w-4 h-4 text-yellow-400" />
        <p className="  flex items-center font-medium ">
          {region}의 인기글을 모두 모았어요!
        </p>
      </div>
      {MockData.map((item) => {
        return (
          <FeedItem
            key={item.feedId}
            {...item}
          />
        )
      })}
    </div>
  )
}

export default FeedBoard
