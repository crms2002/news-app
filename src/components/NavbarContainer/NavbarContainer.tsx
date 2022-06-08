import React from 'react';

import styles from './NavbarContainer.module.css';

export const NavbarContainer = () => {
    return (
        <div>
            <div className={styles.nav}>
                <h1 style={{textAlign: "center"}}>Nusa</h1>
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
                </div>
            </div>
        </div>
    );
}

export default NavbarContainer;