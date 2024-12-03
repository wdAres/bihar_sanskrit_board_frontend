import React from 'react'
import { IoDocumentAttachOutline } from 'react-icons/io5'
import classes from './NoticeCard.module.css'
import { FiLink } from 'react-icons/fi'
import moment from 'moment'
import { BASE_API } from '../../utils/BASE_URL'
// const Notice = ({ label, createdAt, file , url , latest=false }) => {
//     return (
//       <div className={classes.notice}>
//         <FaRegHandPointRight className={classes.notice_icon} />
//         <a target='_blank' href={url?url:`http://127.0.0.1:8001/${file}`} className={classes.notice_p}>{moment(createdAt).format('DD-MM-YYYY')} - {label} {latest && <span className={classes.notice_span}>latest</span>}</a>
  
//       </div>
//     )
//   }

function NoticeCard({ label, createdAt, file , url , latest=false }) {
    return (
        <div className={classes.card}>
            {file ?

                <IoDocumentAttachOutline fontSize={50} color='yellow' />
                :
                <FiLink fontSize={50} color='yellow' />
            }
            {/* <label>{label}</label> */}
            <a target='_blank' href={`${BASE_API}/${file}`} className={classes.notice_p}>{moment(createdAt).format('DD-MM-YYYY')} - {label} {latest && <span className={classes.notice_span}>latest</span>}</a>
        </div>
    )
}

export default NoticeCard
