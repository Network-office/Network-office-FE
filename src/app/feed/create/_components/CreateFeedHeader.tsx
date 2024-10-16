import Topbar from "@/_common/_components/Topbar"
import { ArrowLeft } from "lucide-react"

interface CreateFeedHeaderProps {
  popStep: () => void
  step: "title" | "category" | "content"
}

const HEADER_TITLE = {
  title: "피드 제목 정하기",
  category: "피드 카테고리 정하기",
  content: "피드 내용 작성하기"
}

const CreateFeedHeader = ({ popStep, step }: CreateFeedHeaderProps) => {
  return (
    <Topbar
      className="bg-slate-100"
      leftContent={
        <div className="flex gap-2">
          <button
            className="bg-none"
            onClick={popStep}>
            <ArrowLeft />
          </button>
          <h1 className="font-semibold tex">{HEADER_TITLE[step]}</h1>
        </div>
      }
    />
  )
}

export default CreateFeedHeader
