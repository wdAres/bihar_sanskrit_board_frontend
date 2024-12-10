import React, { useEffect, useState } from 'react'
import classes from './Home.module.css'
import NoticeBoard from '../components/noticeboard/NoticeBoard'
import ContactForm from '../components/Forms/ContactForm'
import useHttp2 from '../hooks/useHttp2'

const Home = () => {

    const [noticeData,setNoticeData] = useState([])
    const [tenderData,setTenderData] = useState([])
    const [linkData,setLinkData] = useState([])
    const {sendRequest:getNotice,isLoading:noticeLoading} = useHttp2()
    const {sendRequest:getLink,isLoading:linkLoading} = useHttp2()
    const {sendRequest:getTender,isLoading:tenderLoading} = useHttp2()
    useEffect(()=>{
        getNotice({url:'notice'},res=>{
            setNoticeData(res.data.docs)
        })
        getTender({url:'tender'},res=>{
            setTenderData(res.data.docs)
        })
        getLink({url:'important-link'},res=>{
            setLinkData(res.data.docs)
        })
    },[])

    return (
        <section className={`${classes.section} universal_width`}>
            <div className={classes.box_1}  alt="" >
                <div className={classes.card}>
                    <img className={classes.card_img} src="./images/cm1.png" alt="" />
                    <div className={classes.card_details}>
                        <h1>Sri Nitish Kumar</h1>
                        <p>Hon'ble Chief Minister</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img className={classes.card_img} src="./images/em1.png" alt="" />
                    <div className={classes.card_details}>
                        <h1>Sri Sunil Kumar</h1>
                        <p>Hon'ble Education Minister</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img className={classes.card_img} src="./images/ed1.png" alt="" />
                    <div className={classes.card_details}>
                        <h1>Sri Baidya Nath Yadav</h1>
                        <p>Hon'ble Secretary, Education Department, Government Of Bihar
                        & Administrator of Bihar Sanskrit Shiksha Board.</p>
                    </div>
                </div>
                <div className={classes.card}>
                    {/* <img className={classes.card_img} src="./images/ed.jpg" alt="" /> */}
                    <div className={classes.card_img}></div>
                    <div className={classes.card_details}>
                        <h1>Sri Neeraj Kumar</h1>
                        <p>Secretory, Bihar Sanskrit Shiksha Board</p>
                    </div>
                </div>
               
            </div>
            {/* <div className={`${classes.box_2}`}>
            <h1 className={classes.h1}>About Us</h1>
                <p className={classes.p}>
                The Bihar Sanskrit Shiksha Board was established for the promotion and propagation of the Sanskrit language. It operates approved Sanskrit schools from Class 1 to Class 10. Examinations for Classes 1 to 9 are conducted at the school level. The examinations for secondary schools are conducted at the board level, which is called the Madhyama (Class 10) annual examination. The control and administrative office for the Madhyama examination and Sanskrit schools from Class 1 to 10 under the board is the Bihar Sanskrit Shiksha Board. The curriculum and syllabus for these schools are determined by the board with the permission of the state government.

                </p>
                <p className={classes.p}>
                Every year, based on the curriculum set by the Bihar Sanskrit Shiksha Board/state government, the annual secondary examination is held in February/March. The Bihar Sanskrit Shiksha Board was established to conduct secondary school examinations, to determine the curriculum for such examinations, and to fulfill other objectives and duties deemed necessary for the purpose as mentioned in the board's Act, rules, and regulations.

                </p>
                <p className={classes.p}>
                Higher secondary and other higher-level examinations are not conducted by the Bihar Sanskrit Shiksha Board.
                </p>
              
            </div>
            <div className={`${classes.box_3}`}>
                <div className={classes.boxed_sub_heading}>Student Corner</div>
                <div className={classes.box_3_links}>
                    <a href="#!" className={classes.box_3_link}>Admission Details</a>
                    <a href="#!" className={classes.box_3_link}>Course Offered</a>
                    <a href="#!" className={classes.box_3_link}>Exam Results</a>
                    <a href="#!" className={classes.box_3_link}>Online Verification</a>
                </div>
            </div>
            <div className={`${classes.box_4}`}>
                <h1 className={classes.h1}> Check COBSE Membership</h1>
                <p className={classes.p}>
                COBSE is consortium of all Boards of School Education in India . COBSE is coordinate with different Boards , Different States of Ministry of Education , Ministry of HRD , Govt. of India and different State Govt. to promote and propagate school education upholding the true spirit of ‘ right to education ‘ of Govt. of India . COBSE is established and incorporated as a legal entity Under Government of India Act. COBSE is non-profit and autonomous organization which work for the all education Boards / Councils of India .The major function of Board is Consortium of all Boards of School Education in India ( Educational Boards / Educational Councils / Universities ) in all States of India. COBSE works for the guidance to All Boards of School Education in India for Quality Control , Proper guidance of education system of India , for the welfare of disadvantaged , street children, women , poor and minority people and its is a the promotion of school education including curriculum reforms and improvement of educational systems. COBSE also help to education Boards in preparing quality syllabus and course materials in accordance with National curriculum framework 2005 prepared by NCERT.
                </p>
                <p className={classes.p}>Check COBSE Membership, Recognized by COBSE.</p> 
                <a className='universal_a' href="https://www.cobse.org.in/" target='_blank'>https://www.cobse.org.in/</a>
                <p className={classes.p}></p>
                <a className='universal_a' href="cbose.pdf" download={true} target='_blank'>Download File</a>
            </div>
           
            <div className={`${classes.box_5}`}>
                <div className={classes.boxed_sub_heading}>Quick Inquiry</div>
                <ContactForm />
            </div> */}
            <div className={classes.box_6}>
            <NoticeBoard styleComb={{heading:classes.nb_heading_1,bg:classes.nb_bg_1}} data={noticeData} loading={noticeLoading} heading={'Notice'} />
            <NoticeBoard styleComb={{heading:classes.nb_heading_2,bg:classes.nb_bg_2}} data={linkData} loading={linkLoading} heading={'Important Links'} />
            <NoticeBoard styleComb={{heading:classes.nb_heading_3,bg:classes.nb_bg_3}} data={tenderData} loading={tenderLoading} heading={'Tender'} />
            </div>
        </section>
    )
}

export default Home