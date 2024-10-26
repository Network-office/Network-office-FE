export interface ClubItemTypes {
  clubId: string
  name: string
  imageUrl: string | null
  meetingFrequency: string
  genre: string
  location: {
    city: string
    district: string
    neighborhood: string
  }
}
