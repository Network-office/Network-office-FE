import Link from "next/link"
import { Plus } from "lucide-react"

const FeedFootBar = () => {
  return (
    <div className="fixed w-full bottom-6 left-0 z-10 px-4 flex justify-end ">
      <Link href="feed/create">
        <Plus
          className="w-[50px] h-[50px] bg-slate-200 rounded-full px-1 shadow-xl"
          size={44}
        />
      </Link>
    </div>
  )
}

export default FeedFootBar
