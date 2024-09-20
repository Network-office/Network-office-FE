import { SocketMessageResponse } from "@/app/chat/[chatId]/_components/types"
import { faker } from "@faker-js/faker"

interface UserInfo {
  id: string
  username: string
  avatarSrc: string
}

const generateMessage = (
  me: boolean,
  role: "user" | "admin",
  text: string,
  userInfo: UserInfo
): SocketMessageResponse => ({
  id: faker.string.uuid(),
  me,
  role,
  message: {
    text,
    timestamp: faker.date.soon().getTime()
  },
  userInfo
})

const generateUserInfo = (id: string): UserInfo => ({
  id,
  username: faker.internet.userName(),
  avatarSrc: faker.image.avatar()
})

const MyInfo = generateUserInfo(faker.string.uuid())
const UserInfo1 = generateUserInfo(faker.string.uuid())
const UserInfo2 = generateUserInfo(faker.string.uuid())
export const generateMyMessage = (text: string): SocketMessageResponse =>
  generateMessage(true, "user", text, MyInfo)
export const generateAdminMessage = (text: string): SocketMessageResponse =>
  generateMessage(false, "admin", text, UserInfo1)
export const generateUserMessage = (text: string): SocketMessageResponse =>
  generateMessage(false, "user", text, UserInfo2)
