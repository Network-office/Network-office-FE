import { MessageGroup } from "@/app/chat/[chatId]/_apis/getChatHistory"
import { addMessageToChatHistory } from "@/app/chat/[chatId]/_utils/addMessageToChatHistory"
import { chatHistoryDataMap } from "@/mock/mockData/chatHistoryData"
import { generateMyMessage } from "@/mock/mockData/chatMessageData"
import { describe, expect, test } from "@jest/globals"

describe("addMessageToGroup", () => {
  test("마지막 메시지 그룹과 수신된 메세지의 id가 같을 때 마지막 메시지 그룹에 메세지를 추가한다", () => {
    const myId = "myId"

    const chatHistory = chatHistoryDataMap["userMe"]
    chatHistory[chatHistory.length - 1].userInfo.id = myId

    const myMessage = generateMyMessage("new message")
    myMessage.userInfo.id = myId

    const modifiedChatHistory = addMessageToChatHistory(myMessage, chatHistory)
    expect(
      modifiedChatHistory[modifiedChatHistory.length - 1].messages
    ).toContainEqual({
      id: myMessage.id,
      text: myMessage.message.text,
      timestamp: myMessage.message.timestamp
    })
  })

  test("마지막 메시지 그룹과 수신된 메세지의 id가 다를 때 새로운 메시지 그룹을 추가한다", () => {
    const myId = "myId"

    const chatHistory = chatHistoryDataMap["adminMe"]
    chatHistory[chatHistory.length - 1].userInfo.id = myId

    const myMessage = generateMyMessage("new message")
    myMessage.userInfo.id = "anotherId"

    const modifiedChatHistory = addMessageToChatHistory(myMessage, chatHistory)
    expect(modifiedChatHistory).toHaveLength(chatHistory.length + 1)

    expect(
      modifiedChatHistory[modifiedChatHistory.length - 1].messages
    ).toContainEqual({
      id: myMessage.id,
      text: myMessage.message.text,
      timestamp: myMessage.message.timestamp
    })
  })

  test("마지막 메시지 그룹이 없을 때 새로운 메시지 그룹을 추가한다", () => {
    const chatHistory = [] as MessageGroup[]

    const myMessage = generateMyMessage("new message")
    myMessage.userInfo.id = "anotherId"

    const modifiedChatHistory = addMessageToChatHistory(myMessage, chatHistory)
    expect(modifiedChatHistory).toHaveLength(1)
  })
})
