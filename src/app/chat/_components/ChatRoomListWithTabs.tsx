"use client"

import ChatRoomItem from "@/app/chat/_components/ChatRoomItem"
import useGetChatRoomList from "@/app/chat/_hooks/queries/useGetChatRoomList"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"

const roleToKorean = {
  admin: "소장",
  user: "참여",
  all: "전체"
} as const

interface ChatRoomListWithTabsProps {
  role: "admin" | "user" | undefined
}

const ChatRoomListWithTabs = ({
  role: defaultRole
}: ChatRoomListWithTabsProps) => {
  const router = useRouter()
  const pathName = usePathname()
  const [role, setRole] = useState<"admin" | "user" | undefined>(defaultRole)
  const { data: rooms } = useGetChatRoomList(role)

  const handleTabClick = (role: "admin" | "user" | undefined) => {
    router.push(pathName + `?role=${role}`)
    setRole(role)
  }

  return (
    <Tabs>
      <TabsList>
        {Object.entries(roleToKorean).map(([roleEn, roleKo]) => (
          <TabsTrigger
            key={roleEn}
            value={roleEn}
            onClick={() =>
              handleTabClick(roleEn as "admin" | "user" | undefined)
            }>
            {roleKo}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={role ?? "all"}>
        <div className="flex flex-col">
          {rooms?.map((room) => (
            <ChatRoomItem
              key={room.title}
              room={room}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default ChatRoomListWithTabs
