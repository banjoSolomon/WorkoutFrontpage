import React from 'react';
import styles from './index.module.css';
import icon from '../../asset/Group 5.png';

const Navbar = () => {
    return (
        <div>
            <div className={styles.navContainer}>
                <h2>WORKOUT</h2>
                <div className={styles.midSection}>
                    <p>EXERCISE</p>
                    <p>TRAINERS</p>
                    <p>PRICING</p>
                    <p>LOGIN</p>
                </div>
            </div>
            <div className={styles.logoContainer}>
                <img src={icon} alt="Group 5 logo" />
            </div>
        </div>
    );
};

export default Navbar;
