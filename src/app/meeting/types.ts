import { UserInformTypes } from "../mypage/types"

export interface MeetingPositionTypes {
  id: number
  lat: number
  lng: number
  category: string
}

export interface MeetingInform extends MeetingPositionTypes {
  id: number
  author: string
  authorId: string
  status: string
  title: string
  place: string
  date: string
  startTime: string
  endTime: string
  category: string
  totalPeople: number
  nowPeople: number
  fee: number
  detail: string
  lng: number
  lat: number
  confirmedParticipants: UserInformTypes[]
}

export interface MeetingListResponse {
  content: MeetingInform[]
}
