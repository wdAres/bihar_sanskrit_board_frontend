import React from 'react'
import classes from './AboutLayout.module.css'
import { NavLink } from 'react-router-dom'

const AboutLayout = ({ children }) => {
    return (
        <div className={`${classes.container} universal_width`} >
            {/* <div className={`${classes.sidebar}`}>
                <div className={classes.boxed_sub_heading}>Quick Links</div>
                <div className={classes.links}>
                    <NavLink to={'/about/general_info'} className={classes.link}>General Information</NavLink>
                    <NavLink to={'/about/chairman_message'} className={classes.link}>Chairman's Message</NavLink>
                    <NavLink to={'/about/history'} className={classes.link}>History</NavLink>
                    <NavLink to={'/about/rules'} className={classes.link}>Rules & Regulations</NavLink>
                    <NavLink to={'/about/objectives'} className={classes.link}>Objectives</NavLink>
                    <NavLink to={'/about/aim'} className={classes.link}>Aim</NavLink>
                </div>
            </div> */}
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}

export default AboutLayout