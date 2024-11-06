import React from 'react'
import classes from './layoutBased.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const Header = ({openSidebar}) => {
  return (
    <header className={classes.header}>
        <div className={`${classes.inner_header} universal_width`}>
        <a className={classes.header_logo} href="#!"><img src="/images/logo.png" alt="" /></a>
        <nav className={classes.header_nav}>
            <NavLink to={'/'} className={classes.header_nav_link}>Home</NavLink>
            <NavLink to={'/courses'} className={classes.header_nav_link}>Courses</NavLink>
            <NavLink to={'/about'} className={classes.header_nav_link}>About</NavLink>
            <NavLink className={classes.header_nav_link} to="/admissions">Admissons</NavLink>
            <NavLink className={classes.header_nav_link} to="/authorised_centers">Authorised Centers</NavLink>
            <NavLink className={classes.header_nav_link} to="/results">Results</NavLink>
            <NavLink className={classes.header_nav_link} to="/contact">Contact Us</NavLink>
        </nav>
        <button className={classes.ham_burger_menu}>
            <RxHamburgerMenu onClick={openSidebar} size={20} />
        </button>
        </div>
    </header>
  )
}

export default Header