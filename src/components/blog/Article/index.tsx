import React, { FunctionComponent } from 'react'
import { Article } from '../../../models/Article'
import FormatDate from '../../../_helpers/format-date'
import TruncateMarkup from 'react-truncate-markup'
import './article.scss'
import { Slide } from 'react-awesome-reveal'
import { Link, useNavigate } from 'react-router-dom'

type Props = {
    article: Article
}

const ArticleCard: FunctionComponent<Props> = ({ article }) => {
    const navigate = useNavigate()

    const goToArticleDetail = () => {
        navigate(`/blog/${article.id}`)
    }

    return (
        <Slide>
            <div
                role="button"
                className="article"
                onClick={() => goToArticleDetail()}
            >
                <img
                    className="article__img"
                    src={article.picture}
                    alt="article img"
                />
                <p className="article__title">{article.title}</p>
                <TruncateMarkup
                    lines={5}
                    ellipsis={
                        <span>
                            ...&nbsp;&nbsp;
                            <Link to={'/blog/' + article.id}>voir plus</Link>
                        </span>
                    }
                >
                    <p className="article__desc">{article.desc}</p>
                </TruncateMarkup>
                <p className="article-footer">
                    <p className="article-footer__comment">
                        <i className="material-icons article-footer__comment__icon">
                            comment
                        </i>
                        <span> &nbsp;12</span>
                    </p>
                    <p className="article-footer__date">
                        {FormatDate(article.publishAt)}
                    </p>
                </p>
            </div>
        </Slide>
    )
}

export default ArticleCard
