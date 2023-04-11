import React, { FunctionComponent, useEffect, useState } from 'react'
import { Article } from '../../../models/Article'
import FormatDate from '../../../_helpers/format-date'
import { useParams } from 'react-router-dom'
import { ARTICLES } from '../../../models/mock-service'
import { Link } from 'react-router-dom'
import './detail-article.scss'
import CommentCard from '../Comment'

const ArticleDetail: FunctionComponent = () => {
    const [article, setArticle] = useState<Article>()
    const params = useParams()
    const id = params.id
    useEffect(() => {
        if (id) {
            setArticle(ARTICLES[+id])
        }
    }, [params.id])

    return (
        <div className="detail-article">
            {article ? (
                <div>
                    <div className="detail-article-brand">
                        <Link to="/blog">
                            <i
                                role="button"
                                className="material-icons detail-article-brand__arrow-back"
                            >
                                arrow_back
                            </i>
                        </Link>
                        <span className="detail-article-brand__title">
                            {article.title}
                        </span>
                    </div>
                    <div className="detail-article-img-card">
                        <img
                            src={article.picture}
                            className="detail-article-img-card__picture"
                            alt={article.title + ' img'}
                        />
                    </div>
                    <p className="detail-article__publish-date">
                        Publié le {FormatDate(article.publishAt)}
                    </p>
                    <div className="detail-article-desc-card">
                        <h3 className="detail-article-desc-card__title">
                            Descritpion
                        </h3>
                        <div className="detail-article-desc-card__desc">
                            {article.desc.map((desc, index) => (
                                <p
                                    key={desc.substring(0, 10) + index}
                                    className="detail-article-desc-card__desc__line"
                                >
                                    {desc}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="detail-article-commentaire-card">
                        <div className="detail-article-commentaire-title-card">
                            <h3 className="detail-article-commentaire-title-card__title">
                                Commentaires
                            </h3>
                            <span className="detail-article-commentaire-title-card__nb">
                                12
                            </span>
                        </div>
                        <div>
                            {article.comments.map((comment) => (
                                <CommentCard
                                    key={
                                        comment.id +
                                        comment.publishAt.toString()
                                    }
                                    comment={comment}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loader</p>
            )}
        </div>
    )
}

export default ArticleDetail
