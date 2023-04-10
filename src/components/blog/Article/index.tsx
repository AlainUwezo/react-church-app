import React, { FunctionComponent } from 'react'
import { Article } from '../../../models/Article'
import FormatDate from '../../../_helpers/format-date'
import TruncateMarkup from 'react-truncate-markup'
import './article.scss'
import { Slide } from 'react-awesome-reveal'

type Props = {
    article: Article
}

const ArticleCard: FunctionComponent<Props> = ({ article }) => {
    return (
        <Slide>
            <div className="article">
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
                            ...&nbsp;&nbsp;<a href="#">voir plus</a>
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
