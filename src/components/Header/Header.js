import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/new-logo.svg';
import fbIcon from '../../assets/images/facebook 1.png';
import { NavLink } from 'react-router-dom';
 

const Header = ({ openModalFn }) => (
    <header className={styles.wrapper}>
        <div>
        <NavLink className={styles.logoLink} exact to="/">
          <img className={styles.logoImg} src={logoImage} alt="Biochemia logo"></img>
        </NavLink>
        </div>
        <HeaderNavigation />

        <a href="https://www.facebook.com/" target="_blank">
            <img className={styles.socialImg} src={fbIcon} alt="Fb logo"></img>
        </a>
    </header>
);

export default Header;