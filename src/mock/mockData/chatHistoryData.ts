import { faker } from "@faker-js/faker"

export interface MessageGroup {
  me: boolean
  role: "user" | "admin"
  messages: {
    id: string
    text: string
    timestamp: number
  }[]
  userInfo: {
    username: string
    avatarSrc: string
  }
}

const generateMessageGroup = (
  me: boolean,
  role: "user" | "admin",
  userInfo: {
    username: string
    avatarSrc: string
  }
): MessageGroup => {
  return {
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
  username: "Alice",
  avatarSrc: faker.image.avatar()
}

const UserInfo1 = {
  username: "Clerk",
  avatarSrc: faker.image.avatar()
}

const UserInfo2 = {
  username: "Bob",
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
  ]
}
