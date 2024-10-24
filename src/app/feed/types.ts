export interface FeedItemTypes {
  feedId: string
  authorId: string
  author: string
  category: string
  title: string
  description: string
  region: string[]
  date: string
  views: number
  likes: number
}

export interface FeedCommentType {
  commentId: string
  author: string
  authorProfileImage: string | null
  detail: string
  createdAt: string
  authorId: string
  region: string[]
  date: string
  views: number
}
