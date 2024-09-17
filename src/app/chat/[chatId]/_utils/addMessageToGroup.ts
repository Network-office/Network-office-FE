import { MessageGroup } from "@/app/chat/[chatId]/_apis/getChatHistory"
import {
  Message,
  SocketMessageResponse
} from "@/app/chat/[chatId]/_components/types"

const socketMessageToMessage = (message: SocketMessageResponse): Message => {
  return {
    id: message.id,
    text: message.message.text,
    timestamp: message.message.timestamp
  }
}

const addSocketMessageToMessageGroup = (
  message: SocketMessageResponse,
  messageGroup: MessageGroup
): MessageGroup => {
  return {
    ...messageGroup,
    messages: [...messageGroup.messages, socketMessageToMessage(message)]
  }
}

const generateMessageGroup = (message: SocketMessageResponse): MessageGroup => {
  return {
    id: message.id,
    me: message.userInfo.me,
    role: message.userInfo.role,
    messages: [socketMessageToMessage(message)],
    userInfo: message.userInfo
  }
}

export const addMessageToGroup = (
  message: SocketMessageResponse,
  messageGroupList: MessageGroup[]
) => {
  const latestMessageGroup = messageGroupList[messageGroupList.length - 1]

  if (latestMessageGroup.me === message.userInfo.me) {
    const modifiedMessageGroup = addSocketMessageToMessageGroup(
      message,
      latestMessageGroup
    )
    return [...messageGroupList.slice(0, -1), modifiedMessageGroup]
  } else {
    const modifiedMessageGroup = generateMessageGroup(message)
    return [...messageGroupList, modifiedMessageGroup]
  }
}
