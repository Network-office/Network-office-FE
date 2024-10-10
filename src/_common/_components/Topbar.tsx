"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
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
        "flex justify-between p-4 items-center border-b-2 sticky top-0 bg-white z-50",
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

const BackLink = () => {
  const router = useRouter()
  return (
    <button
      aria-label="Back"
      onClick={() => router.back()}>
      <ChevronLeft />
    </button>
  )
}

const ProfileLink = () => (
  <Link
    aria-label="Profile"
    href="/mypage">
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
