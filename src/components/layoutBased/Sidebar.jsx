import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import classes from './layoutBased.module.css'

const Sidebar = ({ closeSidebar, sidebar }) => {
  return (
    <>
      {sidebar && <div className={classes.overlay}></div>}
      <div className={`${classes.sidebar} ${sidebar && classes.active_sidebar}`}>
        <RxCross1 onClick={closeSidebar} className={classes.sidebar_icon} />
        <nav className={classes.sidebar_links}>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/'}>Home</Link>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about'}>About</Link>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/general_info'}>- General Information</Link>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/chairman_message'}>- Chairman's Message</Link>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/objectives'}>- Objectives</Link>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/vision'}>- Vision & Mission</Link>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/admissions'}>Admissions</Link>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/authorised_centers'}>Authorised Centers</Link>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/courses'}>Courses</Link>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/results'}>Results</Link>
          <a target='_blank' className={classes.sidebar_link} href={'https://biharsanskritboardcenter.netlify.app'}>School Login</a>
          <a target='_blank' className={classes.sidebar_link} href={'https://biharsanskritboardadmin.netlify.app'}>Board Login</a>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/results'}>Results</Link>
          <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/contact'}>Contact</Link>
        </nav>
      </div>
    </>
  )
}

export default Sidebar