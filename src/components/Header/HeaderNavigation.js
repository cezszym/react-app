import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';
 
const HeaderNavigation = () => (
    <nav>
        <ul className={styles.wrapper}> 
            <li className={styles.navItem}>
            <NavLink exact
            activeClassName={styles.navItemLinkActive} 
            className={styles.navItemLink} to="/fiszki">fiszki</NavLink></li>
            <li className={styles.navItem}>
            <NavLink
            activeClassName={styles.navItemLinkActive} 
            className={styles.navItemLink} to="/quiz">quizy</NavLink></li>
            <li className={styles.navItem, styles.lastLink}>
            <NavLink
            activeClassName={styles.navItemLinkActive} 
            className={styles.navItemLink} to="/poradnik">poradnik weterynaryjny</NavLink></li>
            <li className={styles.about}>
            <NavLink
            activeClassName={styles.navItemLinkActive} 
            className={styles.navItemLink} to="/info">o stronie</NavLink></li>
        </ul>
    </nav>
);

export default HeaderNavigation;