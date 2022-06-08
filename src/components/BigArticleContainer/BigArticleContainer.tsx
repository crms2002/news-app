import React, { useState } from 'react';

import styles from './BigArticleContainer.module.css';

import blankImage from '../../global/style/blank.png';

import Article from '../../utils/interfaces/article';
import { on } from 'process';

export interface BigArticleContainerProps {
    article: Article
}

export const BigArticleContainer = (props: BigArticleContainerProps) => {

    const [hidden, setHidden] = useState<boolean>(true);

    const setDefaultImage = (target: React.SyntheticEvent<HTMLImageElement, Event>) => {
        target.currentTarget.src = blankImage;
    }

    const toggleHidden = () => {
        console.log(`Hidden: ${hidden}`);
        setHidden(!hidden);
    }



    return (
        <div hidden={hidden} className={styles.cardContainer} onClick={(target) => { toggleHidden() }}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <img onError={(target) => setDefaultImage(target)} src={props.article.urlToImage?.toLowerCase()}
                        alt="header-image" />
                </div>
                <div className={styles.cardBody}>
                    <span className={styles.tag}>{props.article.source.name}</span>
                    <h2  >{props.article.title}</h2>
                    <div>
                        <p>{props.article.content}</p>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.userInfo}>
                            <h5>{props.article.author}</h5>
                            <small>{props.article.publishedAt}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigArticleContainer;