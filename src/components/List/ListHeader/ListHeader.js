import React from 'react';
import Title from '../../Title/Title';
import styles from './ListHeader.module.scss';

const ListHeader = ({children}) => (
    <div className={styles.wrapper}>
        <img src="https://i.ibb.co/BZVTWm1/Vector-3.png" />
        <Title secondary>{children}</Title>
        <img></img>
    </div>
);

export default ListHeader;