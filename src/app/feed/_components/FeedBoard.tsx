import FeedItem from "./FeedItem"
import { Star } from "lucide-react"

const MockData = [
  {
    category: "스포츠",
    title: "여기는 그냥 게시판 느낌? 다른 동네도 구경하고 이슈도 확인",
    description:
      "하이마트 맞은편 편의점 테라스에서 소소하게 대화하며 맥주마실 분 구해요하이마트 맞은편 편의점 테라스에서 소소하게 대화하며 맥주마실 분 구해요..",
    position: "항동",
    date: "하루전",
    views: 124
  },
  {
    category: "술",
    title: "으라차차차",
    description:
      "하이마트 맞은편 편의점 테라스에서 소소하게 대화하며 맥주마실 분 구해요하이마트 맞은편 편의점 테라스에서 소소하게 대화하며 맥주마실 분 구해요..",
    position: "항동",
    date: "하루전",
    views: 122
  }
]

const FeedBoard = () => {
  return (
    <div>
      <div className="flex w-[90%] mt-3 mb-5 h-[40px] px-4 mx-auto  rounded-lg bg-slate-100 gap-2">
        <Star className="my-auto w-4 h-4 text-yellow-400" />
        <p className="  flex items-center font-medium ">
          전국의 인기글을 모두 모았어요!
        </p>
      </div>
      {MockData.map((item) => {
        return <FeedItem {...item} />
      })}
    </div>
  )
}

export default FeedBoard
