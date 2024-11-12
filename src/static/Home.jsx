import React from 'react'
import classes from './Home.module.css'
import NoticeBoard from '../components/noticeboard/NoticeBoard'

const Home = () => {
    return (
        <section className={`${classes.section} universal_width`}>
            <div className={classes.box_1}  alt="" ></div>
            <div className={`${classes.box_2}`}>
                <h1 className={classes.h1}> Check COBSE Membership</h1>
                <p className={classes.p}>BIHAR SANSKRIT SHIKSHA BOARD has established to promote Secondary & Senior Secondary Education with motto to achieve complete literacy in India. EDUCATION FOR ALL is a basic aims of the BIHAR SANSKRIT SHIKSHA BOARD. BIHAR SANSKRIT SHIKSHA BOARD associates & facilitate to other organizations of similar aims and objects to achieve AIMS of BSEKANT SPN UP. The BIHAR SANSKRIT SHIKSHA BOARD is providing freedom of subject choice to the student.</p>
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
            <div className={`${classes.box_5}`}>
                <div className={classes.boxed_sub_heading}>Quick Inquiry</div>
                <div className={classes.box_5_form}>
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Email ID' />
                    <textarea placeholder='Message'></textarea>
                    <button>Submit</button>
                </div>
            </div>
            <div className={classes.box_6}>
            <NoticeBoard />
            </div>
        </section>
    )
}

export default Home