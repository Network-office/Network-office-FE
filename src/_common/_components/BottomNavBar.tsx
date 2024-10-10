"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MapPinCheck, Earth, MessageCircle, ScrollText } from "lucide-react"

const NAV_ITEMS = [
  { href: "/meeting", icon: MapPinCheck, label: "모임" },
  { href: "/feed", icon: Earth, label: "피드" },
  { href: "/chat", icon: MessageCircle, label: "메시지" },
  { href: "/manage", icon: ScrollText, label: "모임 관리" }
]

const BottomNavBar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 z-[200] left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}>
              <div
                className={`flex flex-col items-center ${isActive ? "text-blue-500" : "text-gray-500"}`}>
                <item.icon size={24} />
                <span className="text-xs mt-1">{item.label}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNavBar
