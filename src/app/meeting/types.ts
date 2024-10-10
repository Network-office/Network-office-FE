export interface MeetingPositionTypes {
  id: number
  lat: number
  lng: number
}

export interface MeetingInform extends MeetingPositionTypes {
  title: string
  place: string
  fare: string
  status: string
  totalPeople: number
  nowPeople: number
  startTime: string
  endTime: string
}

export interface MeetingListResponse {
  content: MeetingInform[]
}
