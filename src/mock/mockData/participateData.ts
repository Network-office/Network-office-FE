import { users } from "./commonData"
import { meetingData } from "./meetingData"

export const participateData = meetingData.flatMap((meeting) =>
  users.slice(0, 4).map((user) => ({
    isNew: true,
    meetingId: meeting.id,
    userId: parseInt(user.userId),
    message: `${user.nickName}의 참가 메시지입니다.`,
    nickName: user.nickName
  }))
)
export const newParticipateData = meetingData.flatMap((meeting) =>
  users.slice(0, 4).map((user) => ({
    isNew: true,
    meetingId: meeting.id,
    userId: parseInt(user.userId),
    message: `${user.nickName}의 참가 메시지입니다.`,
    nickName: user.nickName
  }))
)
