import React, { useEffect, useState } from 'react';

import styles from './ArticleBoardContainer.module.css';

import Article from '../../utils/interfaces/article';
import NewsAPI from '../../utils/api/news-api';

import ArticleContainer from '../ArticleContainer/ArticleContainer';

export const ArticleBoardContainer = () => {

    const [articles, setArticles] = useState<Article[]>();
    const [error, setError] = useState<boolean>()

    useEffect(() => {
        setError(false);
        NewsAPI.getLatestNews()
            .then((data) => {
                setArticles(data.articles)
            })
            .catch((reason) => {
                setError(true);
            })
    }, [])

    return (!error ? (
        <div className={styles.mainContainer}>
            {
                articles?.map((article, index) => {
                    return (
                        <ArticleContainer key={index} article={article} />
                    );
                })
            }
        </div>
    ) : (
        <div className={styles.errorContainer}>
            <div>
                <h3>An Error has ocurred</h3>
            </div>
        </div>
    ))

}

export default ArticleBoardContainer;