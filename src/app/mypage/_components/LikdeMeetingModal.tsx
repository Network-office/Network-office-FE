import Topbar from "@/_common/_components/Topbar"
import { ArrowLeft } from "lucide-react"

interface LikdeMeetingModalProps {
  onCloseModalHandle: () => void
}

const LikdeMeetingModal = ({ onCloseModalHandle }: LikdeMeetingModalProps) => {
  return (
    <div className="w-screen h-screen bg-white">
      <Topbar
        className="bg-green-300"
        leftContent={
          <div className="flex gap-3">
            <button onClick={onCloseModalHandle}>
              <ArrowLeft />
            </button>
            <h1>찜한 모임 목록 </h1>
          </div>
        }
      />
    </div>
  )
}

export default LikdeMeetingModal
