import React from 'react'
import classes from './layoutBased.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={classes.header}>
        <div className={`${classes.inner_header} universal_width`}>
        <a className={classes.header_logo} href="#!"><img src="/images/logo.png" alt="" /></a>
        <nav className={classes.header_nav}>
            <NavLink to={'/'} className={classes.header_nav_link}>Home</NavLink>
            <NavLink to={'/courses'} className={classes.header_nav_link}>Courses</NavLink>
            <a className={classes.header_nav_link} href="#!">About</a>
            <a className={classes.header_nav_link} href="#!">Admission</a>
            <a className={classes.header_nav_link} href="#!">Authorised Centers</a>
            <a className={classes.header_nav_link} href="#!">Results</a>
            <a className={classes.header_nav_link} href="#!">Contact Us</a>
        </nav>
        <button className={classes.ham_burger_menu}>
            <RxHamburgerMenu size={20} />
        </button>
        </div>
    </header>
  )
}

export default Header