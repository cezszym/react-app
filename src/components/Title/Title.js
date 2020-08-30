import React from 'react';
import styles from './Title.module.scss';

const Title = ({children, secondary}) => {

    const titleClass = secondary ? styles.secondary : styles.title;

    return (
        <>
        <h2 className={titleClass}>
            {children}
        </h2>
        </>
    )

};

export default Title;