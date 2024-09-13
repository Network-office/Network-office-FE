export interface MeetingInformTypes {
  id: number
  lat: number
  lng: number
  title?: string
  place?: string
  fare?: string
  totalPeople?: number
  vacancy?: number
  startTime?: string
  endTime?: string
}

export interface MeetingListResponse {
  content: MeetingInformTypes[]
}
