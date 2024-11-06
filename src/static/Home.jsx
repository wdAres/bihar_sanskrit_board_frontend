import React from 'react'
import classes from './Home.module.css'

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
                <h1 className={classes.h1}>About BIHAR SANSKRIT SHIKSHA BOARD</h1>
                <p className={classes.p}>
                    The BIHAR SANSKRIT SHIKSHA BOARD is established for holding and conducting an examination at the end of the Senior Secondary School stage, for prescribing course of studies for such examination and for carrying out such other objects and duties as may be considered necessary for the purpose as stated in the Act, Rules and Regulations of the Board.
              </p>

              <p className={classes.p}>
              Normally every year the BIHAR SANSKRIT SHIKSHA BOARD conducts Annual Secondary School Examination in the month of February/March and Supplementary School Examination in the month of August/September on the basis of course/syllabus as prescribed by the state Government.
              
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
        </section>
    )
}

export default Home