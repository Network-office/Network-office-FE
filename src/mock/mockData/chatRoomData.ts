import {
  ChatRoom,
  ChatRoomListResponse
} from "@/app/chat/_apis/getChatRoomList"
import { faker } from "@faker-js/faker"

const generateChatRoomData = (): ChatRoom => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    authorInfo: {
      name: faker.internet.userName(),
      avatarSrc: faker.image.avatar()
    },
    currentMessage: {
      content: faker.lorem.sentence(),
      timestamp: faker.date.recent().toISOString()
    },
    myRole: faker.helpers.arrayElement(["admin", "user"]),
    unreadCount: faker.number.int(100)
  }
}

const generateChatRoomListData = (length: number) =>
  Array.from({ length }, generateChatRoomData)

export const chatRoomListData = generateChatRoomListData(10)
