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
    me: message.me,
    role: message.role,
    messages: [socketMessageToMessage(message)],
    userInfo: message.userInfo
  }
}

export const addMessageToChatHistory = (
  message: SocketMessageResponse,
  messageGroupList: MessageGroup[]
): MessageGroup[] => {
  if (messageGroupList.length === 0) {
    return [generateMessageGroup(message)]
  }

  const latestMessageGroup = messageGroupList[messageGroupList.length - 1]
  const isSameUser = latestMessageGroup.userInfo.id === message.userInfo.id
  const latestMessageTime = new Date(
    latestMessageGroup.messages[
      latestMessageGroup.messages.length - 1
    ].timestamp
  )
  const messageTime = new Date(message.message.timestamp)

  const isSameMinute =
    latestMessageTime.getHours() === messageTime.getHours() &&
    latestMessageTime.getMinutes() === messageTime.getMinutes()

  if (isSameUser && isSameMinute) {
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
