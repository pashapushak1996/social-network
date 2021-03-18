import React from 'react';
import logo from '../../assets/images/Sketch_Logo.svg';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={ styles.header }>
            <img src={ logo } alt=""/>
            <div className={ styles.login }>
                { props.isAuth ? <div>
                    <span> { props.login }</span>
                    <button onClick={ () => props.logoutThunk() }>Logout</button>
                </div> : <NavLink to={ `/login` }>
                    Login
                </NavLink> }
            </div>
        </header>
    );
};

export default Header;

