import React, { FunctionComponent } from 'react'
import './blog.scss'
import Carousel from '../../components/blog/carousel'
import { ARTICLES } from '../../models/mock-service'
import ArticleCard from '../../components/blog/Article'

const Blog: FunctionComponent = () => {
    return (
        <div className="blog">
            <div className="blog-topbar">
                <p className="blog-topbar__tag">Notre blog</p>
                <p className="blog-topbar__title">Explorer nos événements</p>
                <p className="blog-topbar__desc">
                    Lire un ensemble de nos articles.
                </p>
            </div>
            <Carousel />
            <div className="article-container">
                {ARTICLES.map((article) => (
                    <ArticleCard
                        key={article.id + article.title}
                        article={article}
                    ></ArticleCard>
                ))}
            </div>
        </div>
    )
}

export default Blog
