import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/new-logo.svg';
import fbIcon from '../../assets/images/facebook 1.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';



const Header = ({ openModalFn }) => {
    
    const [modalOpen, toggleModal] = useState(false)

    let btnClass = modalOpen ? styles.boxActive : styles.box
    let modalClass = modalOpen ? styles.modalActive : styles.modal

    return (
    <>
    <header className={styles.wrapper}>
        <div>
        <NavLink className={styles.logoLink} exact to="/">
          <img className={styles.logoImg} src={logoImage} alt="Biochemia logo"></img>
        </NavLink>
        </div>
        <HeaderNavigation />
        <div className={btnClass} onClick={() => toggleModal(!modalOpen)}>
            <div className={styles.topHam} />
            <div className={styles.midHam} />
            <div className={styles.botHam} />
        </div>
    </header>
    <div className={modalClass}>
    <nav>
        <ul className={styles.linkList}> 
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
    </div>
    </>
)};

export default Header;