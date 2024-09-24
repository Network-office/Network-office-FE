import Topbar from "@/_common/_components/Topbar"
import { Settings } from "lucide-react"

const MyPageTopBar = () => {
  return (
    <Topbar
      className="bg-blue-400 border-none"
      leftContent={<Topbar.BackLink />}
      rightContent={
        <button>
          <Settings />
        </button>
      }
    />
  )
}

export default MyPageTopBar
