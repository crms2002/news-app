import React from 'react';

import ArticleBoardContainer from '../../components/ArticleBoardContainer/ArticleBoardContainer';
import NavbarContainer from '../../components/NavbarContainer/NavbarContainer';


import styles from './Home.module.css';

export const Home = () => {
    return (
        <div className={styles.container}>
            <NavbarContainer/>
            <ArticleBoardContainer />
        </div>
    );
}

export default Home;