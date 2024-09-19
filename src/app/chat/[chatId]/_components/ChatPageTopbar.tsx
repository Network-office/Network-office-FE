import Topbar from "@/_common/_components/Topbar"
import { ChevronLeft, Users } from "lucide-react"
import Link from "next/link"

const ChatPageTopbar = ({ title }: { title: string }) => (
  <Topbar
    title={title}
    leftContent={
      <Link href="/chat">
        <ChevronLeft />
      </Link>
    }
    rightContent={<Users />}
  />
)

export default ChatPageTopbar
