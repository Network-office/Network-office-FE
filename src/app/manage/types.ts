export interface NewParticipatorTypes {
  isNew: boolean
  meetingId: number
  userId: number
  message: string
  nickName: string
}

export interface GetNewParticipatorResponse {
  contents: NewParticipatorTypes[]
}

export interface AcceptNewParticipatorResponse {
  success: boolean
}
