"use client"

import ChatRoomItem from "@/app/chat/_components/ChatRoomItem"
import useGetChatRoomList from "@/app/chat/_hooks/queries/useGetChatRoomList"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"

const roleToKorean = {
  all: "전체",
  admin: "소장",
  user: "참여"
} as const

interface ChatRoomListWithTabsProps {
  defaultRole: "admin" | "user" | "all"
}

const ChatRoomListWithTabs = ({ defaultRole }: ChatRoomListWithTabsProps) => {
  const router = useRouter()
  const pathName = usePathname()
  const [role, setRole] = useState(defaultRole)
  const { data: rooms } = useGetChatRoomList(role)

  const handleTabClick = (role: "admin" | "user" | "all") => {
    role === "all"
      ? router.push(pathName)
      : router.push(pathName + `?role=${role}`)
    setRole(role)
  }

  return (
    <Tabs defaultValue={role}>
      <div className="p-2">
        <TabsList>
          {Object.entries(roleToKorean).map(([roleEn, roleKo]) => (
            <TabsTrigger
              key={roleEn}
              value={roleEn}
              onClick={() =>
                handleTabClick(roleEn as "admin" | "user" | "all")
              }>
              {roleKo}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <TabsContent value={role}>
        <div className="flex flex-col">
          {rooms?.map((room) => (
            <Link
              aria-label={`${room.title}-link`}
              key={room.title}
              href={`/chat/${room.id}`}>
              <ChatRoomItem
                key={room.title}
                room={room}
              />
            </Link>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default ChatRoomListWithTabs
