export interface NewParticipator {
  isNew: boolean
  meetingId: number
  userId: number
  message: string
  nickName: string
}

export interface GetNewParticipatorResponse {
  contents: NewParticipator[]
}

export interface AcceptNewParticipatorResponse {
  success: boolean
}
