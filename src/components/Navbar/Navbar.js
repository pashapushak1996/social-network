import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../assets/images/sidebarManPhoto_2.svg'

const Navbar = ({followedUsers, isAuth}) => {

    const isVisible = isAuth && followedUsers.length > 0;

    const photoIconElements = followedUsers.map((el) => {
        return (
            <div key={ el.name } className={ styles.photo }>
                <b>{ el.name }</b>
                <img src={ el.photos.small ? el.photos.small : userPhoto } alt="avatar"/>
            </div>
        );
    });

    return (
        <nav className={ styles.sidebar }>
            <div className={ `${ styles.item }` }>
                <NavLink to={ `/profile` } activeClassName={ styles.activeLink }>Profile</NavLink>
            </div>
            <div className={ `${ styles.item }` }>
                <NavLink to={ `/dialogs` } activeClassName={ styles.activeLink }>Messages</NavLink>
            </div>
            <div className={ `${ styles.item }` }>
                <NavLink to={ `/news` } activeClassName={ styles.activeLink }>News</NavLink>
            </div>
            <div className={ `${ styles.item }` }>
                <NavLink to={ `/music` } activeClassName={ styles.activeLink }>Music</NavLink>
            </div>
            <div className={ `${ styles.item }` }>
                <NavLink to={ `/settings` } activeClassName={ styles.activeLink }>Settings</NavLink>
            </div>
            <div className={ `${ styles.item }` }>
                <NavLink to={ `/users` } activeClassName={ styles.activeLink }>Users</NavLink>
            </div>
            { isVisible && <div>
                <p style={ {color: 'white'} }>Friends: </p>
                <div className={ styles.photoIconElements }>
                    { photoIconElements }
                </div>
            </div> }
        </nav>
    );
};

export default Navbar;