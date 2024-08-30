import Link from "next/link"
import { TopbarProps } from "./types"
import { Bell, ChevronLeft, User } from "lucide-react"
import { cn } from "../../lib/utils"

const Topbar = ({
  title,
  leftContent,
  rightContent,
  className
}: TopbarProps) => {
  return (
    <header
      className={cn(
        "flex justify-between p-4 items-center border-b-2",
        className
      )}>
      <div className="flex gap-2 w-fit-content">
        {leftContent}
        {title && <h1>{title}</h1>}
      </div>
      <div>{rightContent}</div>
    </header>
  )
}

const BackLink = () => (
  <Link
    aria-label="Back"
    href="..">
    <ChevronLeft />
  </Link>
)

const ProfileLink = () => (
  <Link
    aria-label="Profile"
    href="/user">
    <User />
  </Link>
)

const AlarmLink = () => (
  <Link
    aria-label="Alarm"
    href="/alarm">
    <Bell />
  </Link>
)

Topbar.BackLink = BackLink
Topbar.ProfileLink = ProfileLink
Topbar.AlarmLink = AlarmLink

export default Topbar
