import React from 'react'
import classes from './noticeboard.module.css'
import { FaRegHandPointRight } from 'react-icons/fa6'

const Notice = ({info,date , new : isNew}) => {
  return (
    <div className={classes.notice}>
        <FaRegHandPointRight className={classes.notice_icon} />
        <p className={classes.notice_p}>{date} - {info} {isNew && <span className={classes.notice_span}>latest</span> }</p>
        
    </div>
  )
}

export default Notice 