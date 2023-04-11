import { Comment } from "./comment"

export interface Article{
    id: number
    title: string
    picture: string
    desc: Array<string>
    publishAt: Date,
    comments: Array<Comment>
}