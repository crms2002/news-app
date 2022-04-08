import React, {useEffect, useState} from 'react';

import styles from "./ArticleContainer.module.css";

import Article from '../../utils/interfaces/article';

import blankImage from '../../global/style/blank.png';

export interface ArticleContainerProps {
    article: Article;
}

export const ArticleContainer = (props: ArticleContainerProps) => {

    const [image, setImage] = useState<string>();

    useEffect(() => {
        setImage(props.article.urlToImage?.toLowerCase());
    }, [])

    const checkDefaultImage = (target : React.SyntheticEvent<HTMLImageElement, Event>) => {
        target.currentTarget.src = blankImage;
    }

    return (
        <div className={styles.card}>
            <a className={styles.urlLink} href={props.article.url?.toLocaleLowerCase()} target="_blank">
                <div className={styles.cardHeader}>
                <img onError={(target) => checkDefaultImage(target)} src={image} 
                    alt="header-image"/>
                </div>
                <div className={styles.cardBody}>
                    <span className={styles.tag}>{props.article.publishedAt}</span>
                    <h4 >{props.article.title}</h4>
                    <p>{props.article.description}</p>
                    <div className={styles.user}>
                        <div className={styles.userInfo}>
                            <h5>{props.article.author}</h5>
                            <small>{props.article.publishedAt}</small>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ArticleContainer;