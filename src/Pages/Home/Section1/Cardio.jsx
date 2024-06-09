import React from 'react';
import styles from './index.module.css';
import g1 from "../../../asset/girl1.png";
import group16 from "../../../asset/Group 16.png";

const Cardio = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.text}>
                <span>Cardio Exercise</span>
                <img className={styles.gl1} src={g1} alt="girl1.png"/>
                <img className={styles.group} src={group16} alt="Group16.png"/>
            </div>
            <div className={styles.text1}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className={styles.button1}>Get Started</button>
                <button className={styles.button2}>preview</button>
            </div>

        </div>
    );
}

export default Cardio;
