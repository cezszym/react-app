import React from 'react';
import triangle from '../../../assets/images/triangle.svg';
import Title from '../../Title/Title';
import styles from './ListHeader.module.scss';

const ListHeader = ({children}) => (
    <div className={styles.wrapper}>
        <img src={triangle} />
        <Title secondary>{children}</Title>
    </div>
);

export default ListHeader;