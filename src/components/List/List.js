import React from 'react';
import ListItem from
'./ListItem';
import styles from './List.module.scss';
import ListHeader from './ListHeader/ListHeader';

const ListWrapper = ({listName, items, isSub, ...props}) => (
    <>
    {items.length ? (
        <div className={isSub ?  styles.subWrapper : styles.wrapper}>
        {listName && <ListHeader>{listName}</ListHeader>}
        <ul className={styles.listWrapper}>

            {items.map( item => (
                <ListItem key={item.title} {...item} isSub={isSub}/>
            ))}
        </ul>
        </div>
    ) : (
        
        <>
        {!isSub && <h1 
        className={styles.noItems}>Brak materiałów w tej dziedzinie...</h1>}
        </>
    )}

    </>
);

export default ListWrapper;