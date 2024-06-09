import React from 'react';
import num from '../../asset/126.png';
import styles from './index.module.css';
import arr from '../../asset/Group 5 (1).png';
import num2 from '../../asset/04.png';
import arr1 from '../../asset/Group 4.png';
import num3 from '../../asset/03.png';
import arr2 from '../../asset/Group 4 (1).png';
import num4 from '../../asset/02.png';
import arr3 from '../../asset/Group 4 (2).png';
import num5 from '../../asset/01.png';
import arr6 from '../../asset/Group 4 (3).png';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.workOutContainer}>
                <img className={styles.numImage} src={num5} alt="01.png"/>
                <h1 className={styles.workOut}>Work Out At Home</h1>
                <img className={styles.arrow} src={arr6} alt="Group 4 (3).png"/>
            </div>
            <p className={styles.videoCount}>15 videos</p>
            <hr className={styles.topHorizontalLine}/>
            <div className={styles.stayStrongContainer}>
                <img className={styles.numImage} src={num4} alt="02.png"/>
                <h1 className={styles.stayStrong}>Stay Strong And Fit</h1>
                <img className={styles.arrow} src={arr3} alt="Group 4 (2).png"/>
            </div>
            <p className={styles.videoCount}>40 videos</p>
            <hr className={styles.horizontalLine}/>
            <div className={styles.intensityContainer}>
                <img className={styles.numImage} src={num3} alt="03.png" />
                <h1 className={styles.intensity}>High Intensity</h1>
                <img className={styles.arrow} src={arr2} alt="Group 4 (1).png"/>
            </div>
            <p className={styles.videoCount}>25 videos</p>
            <hr className={styles.horizontalLine}/>
            <div className={styles.topContainer}>
                <img className={styles.numImage} src={num2} alt="04.png" />
                <h1 className={styles.simpleWorkout}>Simple Workout</h1>
                <img className={styles.arrow} src={arr1} alt="Group4.png"/>
            </div>
            <p className={styles.videoCount1}>35 videos</p>
            <hr className={styles.horizontalLine}/>
            <div className={styles.headerContainer}>
                <img className={styles.numImage} src={num} alt="126.png"/>
                <h1 className={styles.burn}>Burn Calories</h1>
                <img className={styles.arrow} src={arr} alt="Group 5 (1).png"/>
            </div>
            <p className={styles.videoCount}>35 videos</p>
        </div>
    );
};

export default Footer;

