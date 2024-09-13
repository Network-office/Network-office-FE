"use client"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface MeetingDetailHeaderProps {
  title: string
}
const MeetingDetailHeader = ({ title }: MeetingDetailHeaderProps) => {
  const router = useRouter()

  return (
    <div className="w-screen max-w-[600px] h-[40px] flex border-b-[0.8px] mt-4">
      <ArrowLeft
        className="ml-4 w-[30px] mt-[2px]"
        onClick={() => router.back()}
      />
      <span className="ml-3 text-xl font-semibold mb-1">{title}</span>
    </div>
  )
}

export default MeetingDetailHeader
