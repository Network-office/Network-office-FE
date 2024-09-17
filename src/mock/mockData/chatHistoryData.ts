import { MessageGroup } from "@/app/chat/[chatId]/_apis/getChatHistory"
import { faker } from "@faker-js/faker"

const generateMessageGroup = (
  me: boolean,
  role: "user" | "admin",
  userInfo: {
    id: string
    username: string
    avatarSrc: string
  }
): MessageGroup => {
  return {
    id: faker.string.uuid(),
    me,
    role,
    messages: new Array(3).fill(null).map((_, i) => ({
      id: `${i}`,
      text: faker.lorem.sentence(),
      timestamp: faker.date.soon().getTime()
    })),
    userInfo
  }
}

const MyInfo = {
  id: faker.string.uuid(),
  username: faker.internet.userName(),
  avatarSrc: faker.image.avatar()
}

const UserInfo1 = {
  id: faker.string.uuid(),
  username: faker.internet.userName(),
  avatarSrc: faker.image.avatar()
}

const UserInfo2 = {
  id: faker.string.uuid(),
  username: faker.internet.userName(),
  avatarSrc: faker.image.avatar()
}

export const chatHistoryDataMap = {
  adminMe: [
    generateMessageGroup(true, "admin", MyInfo),
    generateMessageGroup(false, "user", UserInfo1),
    generateMessageGroup(false, "user", UserInfo2)
  ],
  userMe: [
    generateMessageGroup(false, "user", UserInfo1),
    generateMessageGroup(true, "user", MyInfo),
    generateMessageGroup(false, "admin", UserInfo2),
    generateMessageGroup(false, "user", UserInfo1)
  ],
  empty: []
}
