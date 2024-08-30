"use client"

import Link from "next/link"
import { TopbarProps } from "./types"

const Topbar = ({ title, leftContent, rightContent }: TopbarProps) => {
  return (
    <div>
      <div>
        {leftContent}
        {title}
      </div>
      <div>{rightContent}</div>
    </div>
  )
}

const BackLink = () => <Link href="..">뒤로 가기</Link>

const ProfileLink = () => <Link href="/user">사용자</Link>

const AlarmLink = () => <Link href="/alarm">알림</Link>

Topbar.BackLink = BackLink
Topbar.ProfileLink = ProfileLink
Topbar.AlarmLink = AlarmLink

export default Topbar
