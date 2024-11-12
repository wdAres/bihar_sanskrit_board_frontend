import React from 'react'
import classes from './noticeboard.module.css'
import Notice from './Notice';

const NoticeBoard = () => {

    const announcements = [
        { date: '24-10-2024', info: '(PM -USP CSSS) सेंट्रल सेक्टर स्कीम ऑफ स्कालरशिप फॉर कॉलेज एंड यूनिवर्सिटी स्टूडेंट्स', new: true },
        { date: '03-09-2024', info: 'Regarding promotion of women incentive scheme for higher education', new: false },
        { date: '31-08-2024', info: 'Information about walk-in-interview for the appointment of retired officers/employees and working officers in non-government/private institutions for various posts of the committee', new: true },
        { date: '31-08-2024', info: 'Information for Information Technology (IT) Professionals working in reputed private organization in Information Technology Industry', new: false },
        { date: '15-07-2024', info: 'Important Instructions for Matric 2024 result download and verification', new: true },
        { date: '15-07-2024', info: 'Important Instructions for Matric 2024 result download and verification', new: false },
        { date: '14-07-2024', info: 'Kushal Yuva Programme', new: true },
        { date: '13-07-2024', info: 'Bihar Student Credit Card Yogna', new: false },
    ];


    return (
        <div className={classes.notice_board}>
            <h2 className={classes.heading}>Notice Board</h2>
            <div className={classes.inner_container}>
                {announcements?.map((element,index)=>(
                    <Notice key={index} {...element} />
                ))}
            </div>
        </div>
    )
}

export default NoticeBoard