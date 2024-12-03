import React, { useState } from 'react';
import classes from './noticeboard.module.css'
import Notice from './Notice';
import './NoticeBoard.css';
import { useNavigate } from 'react-router-dom';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import NoticeCard from './NoticeCard';
const NoticeBoard = ({heading,data,loading}) => {
    const navigate = useNavigate();
    const handleViewMore = () => {
        if (heading === 'Notice') navigate('/notices');
        if (heading === 'Important Links') navigate('/important-links');
        if (heading === 'Tender') navigate('/tenders');
    };
    const [rows, setRows] = useState(1);
    // const announcements = [
    //     { date: '24-10-2024', info: '(PM -USP CSSS) सेंट्रल सेक्टर स्कीम ऑफ स्कालरशिप फॉर कॉलेज एंड यूनिवर्सिटी स्टूडेंट्स', new: true },
    //     { date: '03-09-2024', info: 'Regarding promotion of women incentive scheme for higher education', new: false },
    //     { date: '31-08-2024', info: 'Information about walk-in-interview for the appointment of retired officers/employees and working officers in non-government/private institutions for various posts of the committee', new: true },
    //     { date: '31-08-2024', info: 'Information for Information Technology (IT) Professionals working in reputed private organization in Information Technology Industry', new: false },
    //     { date: '15-07-2024', info: 'Important Instructions for Matric 2024 result download and verification', new: true },
    //     { date: '15-07-2024', info: 'Important Instructions for Matric 2024 result download and verification', new: false },
    //     { date: '14-07-2024', info: 'Kushal Yuva Programme', new: true },
    //     { date: '13-07-2024', info: 'Bihar Student Credit Card Yogna', new: false },
    // ];


    // return (
    //     <div className={classes.notice_board}>
    //      <h2 className={classes.heading}>{heading}</h2>
    //         <div className={classes.inner_container}>
    //             {loading ? 'Loading' : data?.length > 0 ? data?.map((element,index)=>(
    //                 <Notice key={index} {...element} />
    //             )) : 'No Data Found!'}
    //         </div>
    //     </div>
    // )



    return (
        // <div className={classes.notice_board} >
        //     <h2 className={classes.heading}>{heading}</h2>
        //     <div className={classes.grid}>
        //         {loading ? 'Loading' : data?.length > 0 ? data?.map((element,index)=>(
        //             <NoticeCard key={index} {...element} />
        //         )) : 'No Data Found!'}
        //     </div>  
        // </div>
        <div className={classes.notice_board}>
            <h2 className={classes.heading}>{heading}</h2>
            <div className={classes.grid}>
                {loading ? (
                    'Loading'
                ) : data?.length > 0 ? (
                    data.map((element, index) => <NoticeCard key={index} {...element} />)
                ) : (
                    'No Data Found!'
                )}
            </div>
            <div className={classes.view_more}>
                <button onClick={handleViewMore}>View More</button>
            </div>
        </div>
    );
};


    


export default NoticeBoard