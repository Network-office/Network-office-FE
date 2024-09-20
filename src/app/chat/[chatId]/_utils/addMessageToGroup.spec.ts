import { MessageGroup } from "@/app/chat/[chatId]/_apis/getChatHistory"
import { addMessageToGroup } from "@/app/chat/[chatId]/_utils/addMessageToGroup"
import { chatHistoryDataMap } from "@/mock/mockData/chatHistoryData"
import { generateMyMessage } from "@/mock/mockData/chatMessageData"
import { describe, expect, test } from "@jest/globals"

describe("addMessageToGroup", () => {
  test("마지막 메시지 그룹과 수신된 메세지의 id가 같을 때 마지막 메시지 그룹에 메세지를 추가한다", () => {
    const myId = "myId"

    const messageGroup = chatHistoryDataMap["userMe"]
    messageGroup[messageGroup.length - 1].userInfo.id = myId

    const myMessage = generateMyMessage("new message")
    myMessage.userInfo.id = myId

    const resultMessageGroup = addMessageToGroup(myMessage, messageGroup)
    expect(
      resultMessageGroup[resultMessageGroup.length - 1].messages
    ).toContainEqual({
      id: myMessage.id,
      text: myMessage.message.text,
      timestamp: myMessage.message.timestamp
    })
  })

  test("마지막 메시지 그룹과 수신된 메세지의 id가 다를 때 새로운 메시지 그룹을 추가한다", () => {
    const myId = "myId"

    const messageGroup = chatHistoryDataMap["adminMe"]
    messageGroup[messageGroup.length - 1].userInfo.id = myId

    const myMessage = generateMyMessage("new message")
    myMessage.userInfo.id = "anotherId"

    const resultMessageGroup = addMessageToGroup(myMessage, messageGroup)
    expect(resultMessageGroup).toHaveLength(messageGroup.length + 1)

    expect(
      resultMessageGroup[resultMessageGroup.length - 1].messages
    ).toContainEqual({
      id: myMessage.id,
      text: myMessage.message.text,
      timestamp: myMessage.message.timestamp
    })
  })

  test("마지막 메시지 그룹이 없을 때 새로운 메시지 그룹을 추가한다", () => {
    const messageGroup = [] as MessageGroup[]

    const myMessage = generateMyMessage("new message")
    myMessage.userInfo.id = "anotherId"

    const resultMessageGroup = addMessageToGroup(myMessage, messageGroup)
    expect(resultMessageGroup).toHaveLength(1)
  })
})
