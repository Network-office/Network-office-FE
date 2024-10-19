import { StaticImageData } from "next/image"

export interface ClubDetailData {
  clubId: string
  name: string
  images: StaticImageData[]
  schedule: string
  fee: string
  organizer: string
  memberCount: number
  maxMembers: number
  description: string
  genre: string
  location: {
    city: string
    district: string
    neighborhood: string
  }
}
