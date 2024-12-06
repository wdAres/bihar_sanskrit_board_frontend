import React from 'react'
import classes from './layoutBased.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import GoogleTranslate from '../GoogleTranslate'

const Header = ({ openSidebar }) => {
  return (
    <header className={classes.header}>
      <div className={`${classes.inner_header} universal_width`}>
        <a className={classes.header_logo} href="#!">
          <img src="/images/bssp_logo.png" alt="" />
          <div className={classes.header_logo_inner_div}>
            <h4>Bihar Sanskrit</h4>
            <h6>Education Board Patna</h6>
          </div>
        </a>
        <nav className={classes.header_nav}>
          <NavLink to={'/'} className={classes.header_nav_link}>Home</NavLink>

          {/* <NavLink to={'/about'} className={classes.header_nav_link}>About</NavLink> */}
          <div className={`${classes.header_nav_link} ${classes.db_links}`}>
            ABOUT BSSB
            <div className={classes.hidden_links}>
              <NavLink to={'/about/general_info'} className={classes.header_nav_link}>ABOUT US</NavLink>
              <NavLink to={'/about/chairman_message'} className={classes.header_nav_link}>CHAIRMAN’S MESSAGE</NavLink>
              <NavLink to={'/about/chairman_message'} className={classes.header_nav_link}>COBSE</NavLink>
              {/* <NavLink to={'/about/general_info'} className={classes.header_nav_link}>General Information</NavLink> */}
              
              <NavLink to={'/about/history'} className={classes.header_nav_link}>HISTORY</NavLink>
              <NavLink to={'/about/aim'} className={classes.header_nav_link}>AIM</NavLink>
              <NavLink to={'/about/rules'} className={classes.header_nav_link}>RULE AND REGULATIONS</NavLink>
              {/* <NavLink to={'/about/objectives'} className={classes.header_nav_link}>Objectives</NavLink> */}
              
            </div>
          </div>
          <div className={`${classes.header_nav_link} ${classes.db_links}`}>
          Academic
            <div className={classes.hidden_links}>
              <NavLink to={'/courses/general_info'} className={classes.header_nav_link}>TYPE OF SCHOOL</NavLink>
              <NavLink to={'/courses/chairman_message'} className={classes.header_nav_link}>STUDENTS</NavLink>
              <NavLink to={'/courses/chairman_message'} className={classes.header_nav_link}>SYLLABUS</NavLink>              
              <NavLink to={'/courses/history'} className={classes.header_nav_link}>FEES STRUCTURE</NavLink>
              
            </div>
          </div>
          
          {/* <NavLink className={classes.header_nav_link} to="/admissions">Admissons</NavLink> */}
          {/* <NavLink className={classes.header_nav_link} to="/authorised_centers">Authorised Centers</NavLink> */}
          {/* <NavLink className={classes.header_nav_link} to="/results">Results</NavLink> */}
          <NavLink className={classes.header_nav_link} to="/contact">Contact Us</NavLink>
          <NavLink to={'/gallary'} className={classes.header_nav_link}>GALLARY</NavLink>
          <div className={`${classes.header_nav_link} ${classes.db_links}`}>
            Dashboard Links
            <div className={classes.hidden_links}>
              <a target='_blank' href='http://13.127.79.175:8082/login' className={classes.header_nav_link} to="/contact">School Login</a>
              <a target='_blank' href='http://13.127.79.175:8083/login' className={classes.header_nav_link} to="/contact">Board Login</a>
            </div>
          </div>
        </nav>
        <button className={classes.ham_burger_menu}>
          <RxHamburgerMenu color='white' onClick={openSidebar} size={20} />
        </button>
        <div className={classes.pos_ab}>
          <GoogleTranslate />
        </div>
      </div>
    </header>
  )
}

export default Header