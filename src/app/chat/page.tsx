import ChatRoomList from "@/app/chat/_components/ChatRoomList"

interface ChatRoomPageProps {
  searchParams: { role?: string }
}

const ChatRoomPage = ({ searchParams }: ChatRoomPageProps) => {
  const role = searchParams.role as "admin" | "user" | undefined //TODO: "admin" | "user" 를 enum 으로 정의할까?
  //TODO: prefetch 로직 추가

  return <ChatRoomList role={role} />
}

export default ChatRoomPage
