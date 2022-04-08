import React from 'react';
import ArticleBoardContainer from '../../components/ArticleBoardContainer/ArticleBoardContainer';

import Bootstrap from 'react-bootstrap';
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';

import styles from './Home.module.css';

export const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <h1 style={{textAlign: "center"}}>News app</h1>
                <div className={styles.navButtons}>
                    <div className={styles.navButton}>
                        <p>1</p>
                    </div>
                    <div className={styles.navButton}>
                        <p>1</p>
                    </div>
                    <div className={styles.navButton}>
                        <p>1</p>
                    </div>
                    <div className={styles.navButton}>
                        <p>1</p>
                    </div>
                    <div className={styles.navButton}>
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div>
                <ArticleBoardContainer />
            </div>
        </div>
    );
}

export default Home;