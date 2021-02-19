import React from 'react';
import styles from './DetailBox.module.scss';
import arrow from '../../../assets/images/box-arrow.svg'

class DetailBox extends React.Component {

    state = {
        infoUncovered: false
    }

    hideBlock = () => {
        this.setState({infoUncovered: true});
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.purpleBlock}>
                    <h2>
                        Wypróbuj nasze <span className={styles.colored}>materiały</span>
                    </h2>
                    <ul>
                        <li>
                            fiszki    
                        </li>
                        <li>
                            fiszki    
                        </li>
                        <li>
                            fiszki    
                        </li>
                    </ul>
                </div>
                <div className={this.state.infoUncovered ? styles.greyBlockHidden : styles.greyBlock}>
                    <div className={styles.welcomeText}>
                        <h1>
                        Na tej stronie nauczysz się biochemii w <span className={styles.colored}> prosty </span> 
                        i <span className={styles.colored}> przyjemny</span> sposób !
                        </h1>
                    </div>
                    <div className={styles.goToAbout}>
                        <div onClick={this.hideBlock} className={styles.arrow}>
                            <p>
                                Sprawdź nasze sposoby na naukę
                            </p>
                            <img className={styles.arrow} src={arrow} />
                        </div>
                    </div>
        
                </div>
            </div>
        )
    }
} 

export default DetailBox;