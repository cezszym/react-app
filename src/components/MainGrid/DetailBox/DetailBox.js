import React from 'react';
import styles from './DetailBox.module.scss';
import arrow from '../../../assets/images/box-arrow.svg'

const DetailBox = () => (
    <div className={styles.wrapper}>
        <div className={styles.purpleBlock}></div>
        <div className={styles.greyBlock}>
            <div className={styles.welcomeText}>
                Na tej stronie nauczysz się biochemii w prosty 
                i przyjemny sposób!
            </div>
            <div className={styles.goToAbout}>
                <a href="fiszki">
                    <p>Dowiedź się więcej</p>
                    <img src={arrow} />
                </a>
            </div>

        </div>
    </div>
)

export default DetailBox;