import React from 'react';
import List from '../List/List';
import styles from './MainGrid.module.scss';
import DetailBox from './DetailBox/DetailBox';

const MainGrid = ({listName, items, imageLink}) => (
        <div className={styles.wrapper}>
        {items ?
        <> 
        <List listName={listName} items={items}/>
        <img className={styles.animated} src={imageLink} alt={listName}></img>
        </> :
        <>
        <DetailBox />
        <img src={imageLink} alt={listName}></img>
        </>
        }
        </div>
)

export default MainGrid;