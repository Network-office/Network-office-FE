import Topbar from "@/_common/_components/Topbar"
import { ArrowLeft } from "lucide-react"

interface CreateFeedHeaderProps {
  popStep: () => void
  step: string
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
          <h1 className="font-semibold tex">{step}</h1>
        </div>
      }
    />
  )
}

export default CreateFeedHeader
