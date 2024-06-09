import React from 'react';
import styles from './index.module.css';
import paint1 from '../../../asset/Group 141.png';
import gifImage from './../../../gif/download.gif';
import guy1 from "../../../asset/Group 146.png";
import girl1 from "../../../asset/Group 142.png";
import girl2 from "../../../asset/girl.png";

const WorkoutProgram = () => {
    return (
        <div className={styles.programContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.program}>
                    <span>WorkOut</span>
                    <span>Program</span>
                    <span>Made For You</span>
                    <img className={styles.paint} src={paint1} alt="Group 141.png"/>
                </div>
                <div className={styles.gif}>
                    <img src={gifImage} alt="Your GIF"/>
                    <button className={styles.button}>Get Started</button>
                </div>
            </div>
            <div className={styles.imagesContainer}>
                <div className={styles.personContainer}>
                    <img className={styles.guy} src={guy1} alt="Group 146.png"/>
                    <div className={styles.textContainer}>
                        <p>Jonathan Wise</p>
                        <p className={styles.trainerText}>Trainer</p>
                    </div>
                </div>
                <div className={styles.personContainer}>
                    <img className={styles.girl} src={girl1} alt="Group 142.png"/>
                    <div className={styles.textContainer}>
                        <p>Karen Summer</p>
                        <p className={styles.trainerText}>Trainer</p>
                    </div>
                </div>
                <div className={styles.personContainer}>
                    <img className={styles.girl2} src={girl2} alt="girl.png"/>
                    <div className={styles.textContainer}>
                        <p>Samantha Brown</p>
                        <p className={styles.trainerText}>Trainer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutProgram;
