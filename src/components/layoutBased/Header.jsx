import React from 'react'
import classes from './layoutBased.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import GoogleTranslate from '../GoogleTranslate'

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
           <div className={`${classes.header_nav_link} ${classes.db_links}`}>
           Dashboard Links 
           <div className={classes.hidden_links}>
           <a target='_blank' href='http://13.127.79.175:8082/login' className={classes.header_nav_link} to="/contact">School Login</a>
           <a target='_blank' href='http://13.127.79.175:8083/login' className={classes.header_nav_link} to="/contact">Board Login</a>
           </div>
           </div>
        </nav>
        <button className={classes.ham_burger_menu}>
            <RxHamburgerMenu onClick={openSidebar} size={20} />
        </button>
        <div className={classes.pos_ab}>
        <GoogleTranslate />
        </div>
        </div>
    </header>
  )
}

export default Header