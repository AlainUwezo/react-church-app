import React, { FunctionComponent } from 'react'
import { Comment } from '../../../models/comment'
import './comment.scss'

type Props = {
    comment: Comment
}

const CommentCard: FunctionComponent<Props> = ({ comment }) => {
    return (
        <div className="article-comments">
            <div className="comment-card">
                <p>
                    <span className="comment-card__publisher">
                        {comment.publisher} :
                    </span>
                    <span>{comment.comment}</span>
                </p>
            </div>
            <p className="comment-card__publish-date">12/12/2022</p>
        </div>
    )
}

export default CommentCard
