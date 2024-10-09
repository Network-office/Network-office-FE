import Topbar from "@/_common/_components/Topbar"
import { ScrollText } from "lucide-react"

export default function MnagePageLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Topbar
        className="bg-slate-100 "
        leftContent={
          <div className="flex items-center gap-3">
            <ScrollText className="" />
            <p className="text-xl font-bold">모임 관리</p>
          </div>
        }
      />
      <div className="relative flex min-h-screen flex-col">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
