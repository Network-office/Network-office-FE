"use client"

import ChatRoomList from "@/app/chat/_components/ChatRoomList"
import ChatRoomListSkeleton from "@/app/chat/_components/skeletons/ChatRoomListSkeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { Suspense, useState } from "react"

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
      <Suspense fallback={<ChatRoomListSkeleton />}>
        <TabsContent value={role}>
          <ChatRoomList role={role} />
        </TabsContent>
      </Suspense>
    </Tabs>
  )
}

export default ChatRoomListWithTabs
