import React from 'react';
import styles from './index.module.css';
import pic from './../../../asset/Group 9.png';
import pic1 from './../../../asset/Group 10.png';
import pic2 from './../../../asset/Group 11.png';
import pic3 from './../../../asset/Group 12.png';
import pic4 from './../../../asset/Group 13.png';
import pic5 from './../../../asset/Group 14.png';




const PopularExercise = () => {
    return (
        <div className={styles.popularExerciseContainer}>
            <div className={styles.headerContainer}>
                <p className={styles.title}>Popular Exercise</p>
                <p className={styles.subtitle}>See More Exercise</p>
            </div>
            <div className={styles.imagesContainer}>
                <img className={styles.pic1} src={pic} alt="Group 9.png"/>

                <img className={styles.pic2} src={pic1} alt="Group 10.png"/>
                <img className={styles.pic3} src={pic2} alt="Group 11.png"/>
            </div>
            <div className={styles.imagesContainer1}>
                <img className={styles.pic5} src={pic3} alt="Group 12.png"/>
                <img className={styles.pic6} src={pic4} alt="Group 13.png"/>
                <img className={styles.pic7} src={pic5} alt="Group 14.png"/>


            </div>
        </div>
    );
}

export default PopularExercise;
