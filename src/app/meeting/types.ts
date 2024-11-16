import { UserInformTypes } from "../mypage/types"

export interface MeetingPositionTypes {
  id: number
  x: number
  y: number
  category: string
  title?: string
}

export interface MeetingInform extends MeetingPositionTypes {
  id: number
  author: string
  authorId: string
  status: string
  place: string
  date: string
  startTime: string
  endTime: string
  totalPeople: number
  nowPeople: number
  fee: number
  detail: string
  confirmedParticipants: UserInformTypes[]
}

export interface MeetingListResponse {
  gatherings: MeetingInform[]
}
