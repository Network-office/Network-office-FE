import Link from "next/link"
import { Plus } from "lucide-react"

const FeedFootBar = () => {
  return (
    <div className="fixed w-full bottom-20 left- z-10 px-4 flex justify-end ">
      <Link href="feed/create">
        <Plus
          className="bg-slate-200 rounded-full px-1 mr-1 shadow-2xl"
          size={48}
        />
      </Link>
    </div>
  )
}

export default FeedFootBar
