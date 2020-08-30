import React, { useState } from 'react';
import styles from './Fish.module.scss';
import Title from '../Title/Title';
import leftArrow from '../../assets/images/arrow-left.svg';
import rightArrow from '../../assets/images/arrow-right.svg';
import fliper from '../../assets/images/fliper.svg';
import AppContext from '../../context';

const Fish = () => {
    const [side, setSide] = useState(true)

    const [elementNum, setElementNum] = useState(0)


    return(
    <AppContext.Consumer>
       {(context) =>  (
        <div className={styles.wrapper}>
            <Title secondary>Aminokwasy </Title>
            <div className={styles.box}>
                {side ? 
                <>
                <h2>{context.fiszka1[elementNum].name}</h2>
                <img src={context.fiszka1[elementNum].image}></img>
                </> :
                <div className={styles.listWrapper}>
                    <ul>
                        {context.fiszka1[elementNum].list.map( line => <li>{line}</li>)}
                    </ul>
                </div>
                }
            </div>
            <button onClick={() => setSide(!side)}>
                <img className={styles.fleper} src={fliper} />
            </button>
            <div className={styles.panelWrapper}>
                {elementNum != 0 ? 
                <button onClick={() => {setElementNum( elementNum - 1 ); setSide(true)}}>
                    <img src={leftArrow} />
                </button>:
                <button>
                    <img src={leftArrow} />
                </button>  
                }

                <div className={styles.counter}>{elementNum + 1} /{context.fiszka1.length}</div>

                {elementNum != context.fiszka1.length-1 ? 
                <button onClick={() => {setElementNum( elementNum + 1 ); setSide(true)}}>
                    <img src={rightArrow} />
                </button> : 
                <button onClick={() => setElementNum(0)}>
                    <img src={rightArrow} />
                </button>  
                } 
                
            </div>
        </div>
    )}
    </AppContext.Consumer>
    )
} 

export default Fish;

