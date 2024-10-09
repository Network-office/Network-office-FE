export interface FeedItemTypes {
  feedId: string
  authorId: string
  authorName: string
  category: string
  title: string
  description: string
  region: string[]
  date: string
  views: number
  like: number
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
