import React from 'react'
import classes from './noticeboard.module.css'
import { FaRegHandPointRight } from 'react-icons/fa6'
import moment from 'moment'

const Notice = ({ label, createdAt, file , url , latest=false }) => {
  return (
    <div className={classes.notice}>
      <FaRegHandPointRight className={classes.notice_icon} />
      <a target='_blank' href={url?url:`http://127.0.0.1:8001/${file}`} className={classes.notice_p}>{moment(createdAt).format('DD-MM-YYYY')} - {label} {latest && <span className={classes.notice_span}>latest</span>}</a>

    </div>
  )
}

export default Notice 